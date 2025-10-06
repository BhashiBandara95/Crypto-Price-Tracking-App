import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom"; // get the coin ID from the URL
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
	const { coinID } = useParams();
	const [coinData, setCoinData] = useState();
	const [historicalData, setHistoricalData] = useState();
	const { currency } = useContext(CoinContext);

	// fetch the coin data using API
	const fetchCoinData = async () => {
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				"x-cg-demo-api-key": "CG-pfUAcUZQQzqmiRqhYXL4aGbb",
			},
		};

		// display pages based on currency selection
		fetch(`https://api.coingecko.com/api/v3/coins/${coinID}`, options) // convert this string in template literals
			.then((response) => response.json())
			.then((response) => setCoinData(response))
			.catch((err) => console.error(err));
	};

	const fetchHistoricalData = async () => {
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				"x-cg-demo-api-key": "CG-pfUAcUZQQzqmiRqhYXL4aGbb",
			},
		};
		// display currency details on currency selection
		fetch(
			`https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
			options
		) // convert this string in template literals
			.then((response) => response.json())
			.then((response) => setHistoricalData(response))
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		fetchCoinData();
		fetchHistoricalData();
	}, [currency]); // whenever currency is changed, execute the fetch function

	if (coinData && historicalData) {
		return (
			<div className="coin">
				<div className="coin-name">
					<img src={coinData.image.large} alt="" />
					<p>
						<b>
							{" "}
							{coinData.name} ({coinData.symbol.toUpperCase()})
						</b>
					</p>
				</div>
				<div className="coin-chart">
					<LineChart historicalData={historicalData} />
				</div>

				<div className="coin-info">
					<ul>
						<li>Crypto Market Rank</li>
						<li>{coinData.market_cap_rank}</li>
					</ul>
					<ul>
						<li>Current Price</li>
						<li>
							{currency.symbol}{" "}
							{coinData.market_data.current_price[
								currency.name
							].toLocaleString()}{" "}
						</li>
					</ul>
					<ul>
						<li>Market Cap</li>
						<li>
							{currency.symbol}{" "}
							{coinData.market_data.market_cap[currency.name].toLocaleString()}{" "}
						</li>
					</ul>
					<ul>
						<li>24 Hour high</li>
						<li>
							{currency.symbol}{" "}
							{coinData.market_data.high_24h[currency.name].toLocaleString()}{" "}
						</li>
					</ul>
					<ul>
						<li>24 Hour low</li>
						<li>
							{currency.symbol}{" "}
							{coinData.market_data.low_24h[currency.name].toLocaleString()}{" "}
						</li>
					</ul>
				</div>
			</div>
		);
	} else {
		return (
			<div className="spinner">
				<div className="spin"></div>
			</div>
		);
	}
};

export default Coin;
