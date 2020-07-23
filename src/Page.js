import React from 'react';
import { useTheme } from './contexts/ThemeContext';

export default function Page({ children }) {
	const darkTheme = useTheme();

	const styles = {
		width: '100vw',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: darkTheme ? '#2e3033' : '#497da6',
		fontFamily: 'helvetica',
	};

	return <div style={styles}>{children}</div>;
}
