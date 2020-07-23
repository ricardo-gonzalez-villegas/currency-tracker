import React from 'react';

export default function Forms({ children }) {
	const styles = {
		display: 'flex',
		justifyContent: 'space-around',
		width: '55vw',
		height: '40vh',
	};

	return <div style={styles}>{children}</div>;
}
