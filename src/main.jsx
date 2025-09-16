import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CoinContextProvider from "./context/CoinContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<CoinContextProvider>
				<App />
				{/*we can access the context data in any component in the app component */}
			</CoinContextProvider>
		</BrowserRouter>
	</StrictMode>
);
