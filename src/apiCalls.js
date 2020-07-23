const BASE_URL = 'https://api.exchangeratesapi.io/';

export const getLatestRate = async (base, symbol) => {
	try {
		const response = await fetch(
			`${BASE_URL}latest?base=${base}&symbols=${symbol}`
		);
		const data = await response.json();
		const rate = data.rates[symbol];
		return rate;
	} catch (error) {
		console.log(error);
	}
};

///Data is limited to 1999 onwards
//Dates must be in YYYY-MM-DD format
export const getHistory = async (base, symbol, start, end) => {
	try {
		const response = await fetch(
			`${BASE_URL}history?start_at=${start}&end_at=${end}&base=${base}&symbols=${symbol}`
		);
		const data = await response.json();
		const rates = data.rates;
		return rates;
	} catch (error) {
		console.log(error);
	}
};
