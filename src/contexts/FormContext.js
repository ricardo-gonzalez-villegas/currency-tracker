import React, { useEffect, useState, useContext } from 'react';
import { useData, useDataUpdate } from './DataContext';
import { currencyFormatter } from '../Currency';

const FormContext = React.createContext();

export function useForm() {
	return useContext(FormContext);
}

export default function FormProvider({ children }) {
	const { base, symbol, start, end, latestRate } = useData();
	const [baseDisplay, setBaseDisplay] = useState(currencyFormatter(base, 1));
	const [symbolDisplay, setSymbolDisplay] = useState('');
	const {
		updateBase,
		updateSymbol,
		updateLatestRate,
		updateHistory,
	} = useDataUpdate();

	useEffect(() => {
		updateLatestRate(base, symbol).then(_latestRate => {
			const formattedSymbolDisplay = currencyFormatter(
				symbol,
				_latestRate
			);
			setSymbolDisplay(formattedSymbolDisplay);
			updateHistory(base, symbol, start, end);
		});
	}, []);

	const handleBaseInput = _baseDisplay => {
		if (_baseDisplay === '') _baseDisplay = 0;
		setBaseDisplay(_baseDisplay);
		const total = latestRate * _baseDisplay;
		const formattedSymbolDisplay = currencyFormatter(symbol, total);
		setSymbolDisplay(formattedSymbolDisplay);
	};

	const handleSymbolInput = _symbolDisplay => {
		if (_symbolDisplay === '') _symbolDisplay = 0;
		setSymbolDisplay(_symbolDisplay);
		const total = _symbolDisplay / latestRate;
		const formattedBaseDisplay = currencyFormatter(base, total);
		setBaseDisplay(formattedBaseDisplay);
	};

	const handleBaseSelect = newBase => {
		updateBase(newBase);
		updateLatestRate(newBase, symbol).then(_latestRate => {
			updateHistory(newBase, symbol, start, end);
			const total = symbolDisplay / _latestRate;
			const formattedBaseDisplay = currencyFormatter(newBase, total);
			setBaseDisplay(formattedBaseDisplay);
		});
	};

	const handleSymbolSelect = newSymbol => {
		updateSymbol(newSymbol);
		updateLatestRate(base, newSymbol).then(_latestRate => {
			updateHistory(base, newSymbol, start, end);
			const total = baseDisplay * _latestRate;
			const formattedSymbolDisplay = currencyFormatter(newSymbol, total);
			setSymbolDisplay(formattedSymbolDisplay);
		});
	};

	return (
		<FormContext.Provider
			value={{
				baseDisplay,
				symbolDisplay,
				handleBaseInput,
				handleBaseSelect,
				handleSymbolInput,
				handleSymbolSelect,
			}}
		>
			{children}
		</FormContext.Provider>
	);
}
