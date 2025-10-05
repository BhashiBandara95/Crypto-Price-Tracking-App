import React, { useState, useEffect } from "react";
import Chart from "react-google-charts"; // import React Google Charts

const LineChart = ({ historicalData }) => {
	const [data, setData] = useState([["Date", "Prices"]]);

	useEffect(() => {
		let dataCopy = [["Date", "Prices"]];
		if (historicalData.prices) {
			historicalData.prices.map((item) => {
				dataCopy.push([
					`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, // 05/09/2025=> 05/09(slice(0, -5))
					item[1], // date & price push to datacopy
				]);
			});
			setData(dataCopy);
		}
	}, [historicalData]); // useEffect () is execute when the historical data is changed
	return <Chart chartType="LineChart" data={data} height="100%" legendToggle />;
};

export default LineChart;
