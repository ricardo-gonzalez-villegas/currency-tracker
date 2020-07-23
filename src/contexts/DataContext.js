import React, { useState, useContext } from 'react';
import { getLatestRate, getHistory } from '../apiCalls';
import moment from 'moment';

const DataContext = React.createContext();
const DataUpdateContext = React.createContext();

export function useData() {
	return useContext(DataContext);
}

export function useDataUpdate() {
	return useContext(DataUpdateContext);
}

const unformattedDate = moment().subtract(30, 'days').calendar();
const startDate = moment(unformattedDate).format('YYYY-MM-DD');
const endDate = moment().format('YYYY-MM-DD');

const sortDates = dates => {
	const sortedDates = dates.sort((a, b) => a.date - b.date);
	sortedDates.forEach(item => {
		item.date = moment(item.date).format('YYYY-MM-DD');
	});
	return sortedDates;
};

export default function DataProvider({ children }) {
	const [base, setBase] = useState('USD');
	const [symbol, setSymbol] = useState('JPY');
	const [start, setStart] = useState(startDate);
	const [end, setEnd] = useState(endDate);
	const [latestRate, setLatestRate] = useState('');
	const [historicalRates, setHistoricalRates] = useState('');
	const [historicalDates, setHistoricalDates] = useState('');

	const updateBase = newBase => {
		setBase(newBase);
	};

	const updateSymbol = newSymbol => {
		setSymbol(newSymbol);
	};

	const updateStartDate = start => {
		setStart(start);
	};

	const updateEndDate = end => {
		setEnd(end);
	};

	const updateLatestRate = async (base, symbol) => {
		const rate = await getLatestRate(base, symbol);
		setLatestRate(rate);
		return rate;
	};

	const updateHistory = async (base, symbol, start, end) => {
		const data = await getHistory(base, symbol, start, end);
		const dates = [];
		const rates = [];
		const unSortedDates = [];
		for (const date in data) {
			unSortedDates.push({
				date: new Date(date),
				rate: data[date][symbol],
			});
		}
		const sortedDates = sortDates(unSortedDates);
		sortedDates.forEach(item => {
			dates.push(item.date);
			rates.push(item.rate);
		});
		setHistoricalDates(dates);
		setHistoricalRates(rates);
	};

	return (
		<DataContext.Provider
			value={{
				base,
				symbol,
				start,
				end,
				latestRate,
				historicalDates,
				historicalRates,
			}}
		>
			<DataUpdateContext.Provider
				value={{
					updateBase,
					updateSymbol,
					updateStartDate,
					updateEndDate,
					updateLatestRate,
					updateHistory,
				}}
			>
				{children}
			</DataUpdateContext.Provider>
		</DataContext.Provider>
	);
}
