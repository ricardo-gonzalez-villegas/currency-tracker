import React from 'react';
import { useData, useDataUpdate } from './contexts/DataContext';
import moment from 'moment';

const unformattedDate = moment().subtract(1, 'days').calendar();
const startMaxDate = moment(unformattedDate).format('YYYY-MM-DD');
const endMaxDate = moment().format('YYYY-MM-DD');

export default function Form() {
	const { base, symbol, start, end } = useData();

	const { updateStartDate, updateEndDate, updateHistory } = useDataUpdate();

	const handleStartDate = date => {
		updateStartDate(date);
		updateHistory(base, symbol, date, end);
	};

	const handleEndDate = date => {
		updateEndDate(date);
		updateHistory(base, symbol, start, date);
	};

	const styles = {
		container: {
			width: '30%',
		},
		form: {
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
		},
		div: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		input: {
			fontSize: '1.2rem',
			fontFamily: 'helvetica',
			width: '100%',
			height: '5vh',
			padding: '5px 5px 5px 5px',
			borderRadius: '5px',
			border: '1px solid #b0b1b5',
			boxShadow: '-7px 9px 4px rgba(0, 0, 0, 0.25)',
		},
		label: {
			fontSize: '1.5rem',
			color: '#FFF',
			marginBottom: '10px',
		},
	};

	return (
		<div style={styles.container}>
			<form style={styles.form}>
				<div style={styles.div}>
					<label style={styles.label} htmlFor='start'>
						Start
					</label>
					<input
						style={styles.input}
						type='date'
						name='start'
						min='1999-01-01'
						max={startMaxDate}
						value={start}
						onChange={e => handleStartDate(e.target.value)}
					></input>
				</div>
				<div style={styles.div}>
					<label style={styles.label}>End</label>
					<input
						style={styles.input}
						type='date'
						name='start'
						min='1999-01-02'
						max={endMaxDate}
						value={end}
						onChange={e => handleEndDate(e.target.value)}
					></input>
				</div>
			</form>
		</div>
	);
}
