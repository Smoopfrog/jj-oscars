import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Watchlist from "./Pages/Watchlist/Watchlist";
import User from "./Pages/User/User";
import ErrorPage from "./Pages/Error/ErrorPage";
import Battle from "./Pages/Battle/Battle";
import Stats from "./Pages/Stats/Stats";
import Picks from "./Pages/Picks/Picks";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<BrowserRouter>
		<Routes>
			<Route index element={<Home />} />
			<Route path="/user/:name" element={<User />}>
				<Route index element={<Stats />} />
				<Route path="battle" element={<Battle />} />
				<Route path="picks" element={<Picks />} />
				<Route path="watchlist" element={<Watchlist />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>
			<Route path="*" element={<Home />} />
		</Routes>
	</BrowserRouter>
);
