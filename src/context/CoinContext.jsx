import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
	const [allCoin, setAllCoin] = useState([]);
	const [currency, setCurrency] = useState({
		name: "usd",
		symbol: "$",
	});

	// Fetch the data from API
	const fetchAllCoin = async () => {
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				"x-cg-demo-api-key": "CG-pfUAcUZQQzqmiRqhYXL4aGbb",
			},
			body: undefined,
		};

		// convert data based on currency selection
		fetch(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
			options
		) // convert this string in template literals
			.then((response) => response.json())
			.then((response) => setAllCoin(response))
			.catch((err) => console.error(err));
	};

	// execute the fetchAllCoin() whenever component get loaded
	// useEffect will call this function and it will fetch the data from API
	// data will be stored in the all coin State variable
	useEffect(() => {
		fetchAllCoin();
	}, [currency]);
	// whenever this data get changed it will update it in this fetch url
	// after updating url we have to add a new API request

	const contextValue = {
		allCoin,
		currency,
		setCurrency,
	};

	return (
		<CoinContext.Provider value={contextValue}>
			{props.children}
		</CoinContext.Provider>
	);
};

export default CoinContextProvider;
