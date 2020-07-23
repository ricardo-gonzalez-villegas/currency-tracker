const CURRENCIES = {
	USD: 'USD', //USA
	JPY: 'JPY', //Japan
	CAD: 'CAD', //Canada
	HKD: 'HKD', //Hong Kong
	ISK: 'ISK', //Iceland
	PHP: 'PHP', //Philippines
	DKK: 'DKK', //Denmark
	HUF: 'HUF', //Hungary
	CZK: 'CZK', //Czech Republic
	GBP: 'GBP', //Great Britain
	RON: 'RON', //Romania
	SEK: 'SEK', //Sweden
	IDR: 'IDR', //Indonesia
	INR: 'INR', //India
	BRL: 'BRL', //Brazil
	RUB: 'RUB', //Russia
	HRK: 'HRK', //Croatia
	THB: 'THB', //Thailand
	CHF: 'CHF', //Switzerland
	EUR: 'EUR', //Euro
	MYR: 'MYR', //Malaysia
	BGN: 'BGN', //Bulgaria
	TRY: 'TRY', //Turkey
	CNY: 'CNY', //China
	NOK: 'NOK', //Norway
	NZD: 'NZD', //New Zealand
	ZAR: 'ZAR', //South Africa
	MXN: 'MXN', //Mexico
	SGD: 'SGD', //Singapore
	AUD: 'AUD', //Australia
	ILS: 'ILS', //Israel
	KRW: 'KRW', //South Korea
	PLN: 'PLN', //Poland
};

export const CURRENCY_LIST = [];

for (const symbol in CURRENCIES) {
	if (CURRENCIES.hasOwnProperty(symbol)) {
		CURRENCY_LIST.push(CURRENCIES[symbol]);
	}
}

export const FLAG_LIST = {
	USD: '🇺🇸', //USA
	JPY: '🇯🇵', //Japan
	CAD: '🇨🇦', //Canada
	HKD: '🇭🇰', //Hong Kong
	ISK: '🇮🇸', //Iceland
	PHP: '🇵🇭', //Philippines
	DKK: '🇩🇰', //Denmark
	HUF: '🇭🇺', //Hungary
	CZK: '🇨🇿', //Czech Republic
	GBP: '🇬🇧', //Great Britain
	RON: '🇷🇴', //Romania
	SEK: '🇸🇪', //Sweden
	IDR: '🇮🇩', //Indonesia
	INR: '🇮🇳', //India
	BRL: '🇧🇷', //Brazil
	RUB: '🇷🇺', //Russia
	HRK: '🇭🇷', //Croatia
	THB: '🇹🇭', //Thailand
	CHF: '🇨🇭', //Switzerland
	EUR: '🇪🇺', //Euro
	MYR: '🇲🇾', //Malaysia
	BGN: '🇧🇬', //Bulgaria
	TRY: '🇹🇷', //Turkey
	CNY: '🇨🇳', //China
	NOK: '🇳🇴', //Norway
	NZD: '🇳🇿', //New Zealand
	ZAR: '🇿🇦', //South Africa
	MXN: '🇲🇽', //Mexico
	SGD: '🇸🇬', //Singapore
	AUD: '🇦🇺', //Australia
	ILS: '🇮🇱', //Israel
	KRW: '🇰🇷', //South Korea
	PLN: '🇵🇱', //Poland
};

export const currencyFormatter = (currency, value) => {
	switch (currency) {
		case CURRENCIES.USD:
			return value.toFixed(2);

		case CURRENCIES.JPY:
			return value.toFixed(0);

		case CURRENCIES.CAD:
			return value.toFixed(2);

		case CURRENCIES.HKD:
			return value.toFixed(2);

		case CURRENCIES.ISK:
			return value.toFixed(2);

		case CURRENCIES.PHP:
			return value.toFixed(2);

		case CURRENCIES.DKK:
			return value.toFixed(2);

		case CURRENCIES.HUF:
			return value.toFixed(2);

		case CURRENCIES.CZK:
			return value.toFixed(2);

		case CURRENCIES.GBP:
			return value.toFixed(2);

		case CURRENCIES.RON:
			return value.toFixed(2);

		case CURRENCIES.SEK:
			return value.toFixed(2);

		case CURRENCIES.IDR:
			return value.toFixed(2);

		case CURRENCIES.INR:
			return value.toFixed(2);

		case CURRENCIES.BRL:
			return value.toFixed(2);

		case CURRENCIES.RUB:
			return value.toFixed(2);

		case CURRENCIES.HRK:
			return value.toFixed(2);

		case CURRENCIES.THB:
			return value.toFixed(2);

		case CURRENCIES.CHF:
			return value.toFixed(2);

		case CURRENCIES.EUR:
			return value.toFixed(2);

		case CURRENCIES.MYR:
			return value.toFixed(2);

		case CURRENCIES.BGN:
			return value.toFixed(2);

		case CURRENCIES.TRY:
			return value.toFixed(2);

		case CURRENCIES.CNY:
			return value.toFixed(2);

		case CURRENCIES.NOK:
			return value.toFixed(2);

		case CURRENCIES.NZD:
			return value.toFixed(2);

		case CURRENCIES.ZAR:
			return value.toFixed(2);

		case CURRENCIES.MXN:
			return value.toFixed(2);

		case CURRENCIES.SGD:
			return value.toFixed(2);

		case CURRENCIES.AUD:
			return value.toFixed(2);

		case CURRENCIES.ILS:
			return value.toFixed(2);

		case CURRENCIES.KRW:
			return value.toFixed(2);

		case CURRENCIES.PLN:
			return value.toFixed(2);

		default:
			return value;
	}
};
