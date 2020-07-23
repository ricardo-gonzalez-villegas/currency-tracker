import React from 'react';
import './ToggleButton.css';
import { useThemeUpdate } from './contexts/ThemeContext';

export default function ToggleButton() {
	const toggleTheme = useThemeUpdate();
	return (
		<div className='Toggle'>
			<input onChange={toggleTheme} type='checkbox' id='switch' />
			<label for='switch'>Toggle</label>
		</div>
	);
}
