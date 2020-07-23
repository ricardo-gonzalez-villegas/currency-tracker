import React from 'react';
import { useData } from './contexts/DataContext';
import { useForm } from './contexts/FormContext';
import { useTheme } from './contexts/ThemeContext';
import { CURRENCY_LIST, FLAG_LIST } from './Currency';

export default function Form() {
	const darkTheme = useTheme();
	const { base, symbol } = useData();
	const {
		baseDisplay,
		symbolDisplay,
		handleBaseInput,
		handleBaseSelect,
		handleSymbolInput,
		handleSymbolSelect,
	} = useForm();

	const currencyOptions = CURRENCY_LIST.map(_symbol => (
		<option key={_symbol} value={_symbol}>
			{`${FLAG_LIST[_symbol]} ${_symbol}`}
		</option>
	));

	const COLORS = {
		LIGHT: '#51709c',
		DARK: '#4f5052',
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
			width: '100%',
			boxShadow: '-7px 9px 4px rgba(0, 0, 0, 0.25)',
		},
		input: {
			fontSize: '1.2rem',
			fontFamily: 'helvetica',
			width: '100%',
			height: '5vh',
			padding: '5px',
			borderRadius: '5px 0 0 5px',
			border: '1px solid #b0b1b5',
			borderRight: 'none',
		},
		select: {
			backgroundColor: darkTheme ? COLORS.DARK : COLORS.LIGHT,
			color: '#FFF',
			border: `1px solid ${darkTheme ? COLORS.DARK : COLORS.LIGHT}`,
			borderLeft: 'none',
			borderRadius: '0 5px 5px 0',
			paddingRight: '5px',
			paddingLeft: '5px',
		},
		label: {
			fontSize: '1.5rem',
			color: '#FFF',
			marginBottom: '10px',
		},
		miniContainer: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			width: '100%',
		},
	};

	return (
		<div style={styles.container}>
			<form style={styles.form}>
				<div style={styles.miniContainer}>
					<label style={styles.label} htmlFor='base'>
						Base
					</label>
					<div style={styles.div}>
						<input
							style={styles.input}
							autoFocus
							name='base'
							type='text'
							value={baseDisplay}
							placeholder={0}
							onChange={e => handleBaseInput(e.target.value)}
						/>
						<select
							style={styles.select}
							value={base}
							onChange={e => handleBaseSelect(e.target.value)}
							name='currency'
						>
							{currencyOptions}
						</select>
					</div>
				</div>
				<div style={styles.miniContainer}>
					<label style={styles.label} htmlFor='base'>
						Foreign
					</label>
					<div style={styles.div}>
						<input
							style={styles.input}
							name='symbol'
							type='text'
							value={symbolDisplay}
							placeholder={symbolDisplay}
							onChange={e => handleSymbolInput(e.target.value)}
						/>
						<select
							style={styles.select}
							value={symbol}
							onChange={e => handleSymbolSelect(e.target.value)}
							name='currency'
						>
							{currencyOptions}
						</select>
					</div>
				</div>
			</form>
		</div>
	);
}
