import React from 'react';
import ToggleButton from './ToggleButton';

export default function NavBar() {
	const styles = {
		logo: {
			fontSize: '4rem',
			color: '#FFF',
		},
		button: {
			paddingLeft: '25px',
		},
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '100vw',
		height: '10vh',
		paddingTop: '10px',
	};

	return (
		<div style={styles}>
			<h1 style={styles.logo}>Currency Tracker</h1>
			<ToggleButton />
		</div>
	);
}
