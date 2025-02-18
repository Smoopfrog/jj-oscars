import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Guesses from "./Pages/Guesses/Guesses";
import Watchlist from "./Pages/Watchlist/Watchlist";
import User from "./Pages/User/User";
import ErrorPage from "./Pages/Error/ErrorPage";
import Battle from "./Pages/Battle/Battle";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<BrowserRouter>
		<Routes>
			<Route index element={<Home />} />
			<Route path="/user/:name" element={<User />}>
				<Route index element={<Guesses />} />
				<Route path="battle" element={<Battle />} />
				<Route path="guesses" element={<Guesses />} />
				<Route path="watchlist" element={<Watchlist />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>
			<Route path="*" element={<Home />} />
		</Routes>
	</BrowserRouter>
);
