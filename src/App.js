import React from 'react';
import Page from './Page';
import Forms from './Forms';
import Graph from './Graph';
import NavBar from './NavBar';
import RateForm from './RateForm';
import CalendarForm from './CalendarForm';
import DataProvider from './contexts/DataContext';
import FormProvider from './contexts/FormContext';
import ThemeProvider from './contexts/ThemeContext';

export default function App() {
	const styles = {
		width: '100%',
		height: '100%',
	};
	return (
		<div style={styles}>
			<ThemeProvider>
				<Page>
					<DataProvider>
						<NavBar />
						<FormProvider>
							<Forms>
								<RateForm />
								<CalendarForm />
							</Forms>
						</FormProvider>
						<Graph />
					</DataProvider>
				</Page>
			</ThemeProvider>
		</div>
	);
}
