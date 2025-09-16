Crypto Price Tracking App using React JS & CoinGecko API

<!-- Create a Crypto Price Tracking App using React JS & CoinGecko API

create a cryptocurrency price tracking website or web app using React JS. We will get the real time price of cryptocurrency from CoinGecko API. Using this API data we will build the Price chart also. On this website you can use the search bar and search for individual currency.

On this website you will see the price chart, current price, market cap, 20 hours price change and market rank on cryptocurrency.

Navigation Bar
Welcome text

Search Box - Find crypto currecy name(also include suggetions)

Crypotcurrecy Coins - Name, Price 24 hour chnage, Market Cap

Click the Coin Name:

Coin Image
Name
Date Price chart
Other information about this particular cryptocurrency like Rank Price, Market Cap etc.

we can change the curruncy to change the display data

compltely resposive

// Installation Process

install react using vite scafolding - frontend Build tool
npm i react-router-dom - to create the routing
npm install react-google-charts - to display the charts on the web app -->

<!--
## API fetch function - 1

// Fetch the data from API
	const fetchAllCoin = async () => {
		// convert data based on currency selection
		const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h`; // convert this string in template literals
		const options = {
			method: "GET",
			headers: { "x-cg-demo-api-key": "CG-pfUAcUZQQzqmiRqhYXL4aGbb" },
			body: undefined,
		};

		try {
			const response = await fetch(url, options);
			const data = await response.json(); // converting response to JSON
			setAllCoin(data); // update the setAllCoin with data
		} catch (error) {
			console.error(error);
		}
	};

->


<!--
## API fetch function - 2

// Fetch the data from API
	const fetchAllCoin = async () => {
		const options = {
			method: "GET",
			headers: { accept: 'application/json',
            "x-cg-demo-api-key": "CG-pfUAcUZQQzqmiRqhYXL4aGbb" },
			body: undefined,
		};

// convert data based on currency selection
		fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,options) // convert this string in template literals
		.then(response => response.json())
        .then(response => setAllCoin(response))
        .catch(err => console.error(err));
	};
->
