import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import User from "./Pages/User/User";
import Stats from "./Pages/Stats/Stats";
import Results from "./Pages/Results/Results";
import Picks from "./Pages/Picks/Picks";
import Watchlist from "./Pages/Watchlist/Watchlist";
import ErrorPage from "./Pages/Error/ErrorPage";
import "./index.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<BrowserRouter>
		<Routes>
			<Route index element={<Home />} />
			<Route path="/user/:name" element={<User />}>
				<Route index element={<Stats />} />
				<Route path="results" element={<Results />} />
				<Route path="picks" element={<Picks />} />
				<Route path="watchlist" element={<Watchlist />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>
			<Route path="*" element={<Home />} />
		</Routes>
	</BrowserRouter>
);
