import React from 'react';
import { Line } from 'react-chartjs-2';
import { useData } from './contexts/DataContext';
import { useTheme } from './contexts/ThemeContext';

export default function Graph() {
	const { historicalDates, historicalRates } = useData();

	const darkTheme = useTheme();

	const styles = {
		width: '45vw',
		padding: '15px 15px',
		backgroundColor: darkTheme ? '#4f5052' : '#FFF',
		borderRadius: '5px',
		boxShadow: '-7px 9px 4px rgba(0, 0, 0, 0.25)',
	};

	const data = canvas => {
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(300, 200, 700, 500);
		gradient.addColorStop(0, 'rgba(174,206,238,0.6)');
		gradient.addColorStop(1, 'rgba(76,228,142,0.6)');
		ctx.fillStyle = gradient;
		return {
			labels: historicalDates,
			datasets: [
				{
					data: historicalRates,
					backgroundColor: gradient,
					borderWidth: 1,
					pointRadius: 3,
				},
			],
		};
	};

	const options = {
		scales: {
			yAxes: [
				{
					gridLines: {
						color: darkTheme ? '#FFF' : '#9e9e9d',
					},
					ticks: {
						fontColor: darkTheme ? '#FFF' : '#000',
						fontWeight: 'bold',
						fontFamily: 'helvetica',
					},
				},
			],
			xAxes: [
				{
					display: false,
				},
			],
		},
		legend: {
			display: false,
		},
	};

	const dataIsSet = historicalDates && historicalRates;

	return (
		<>
			{dataIsSet && (
				<div style={styles}>
					<Line data={data} options={options} />
				</div>
			)}
		</>
	);
}
