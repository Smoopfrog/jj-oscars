import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Guesses from "./Pages/Guesses/Guesses";
import Watchlist from "./Pages/Watchlist/Watchlist";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/:name/guesses" element={<Guesses />} />
			<Route path="/:name/watchlist" element={<Watchlist />} />
		</Routes>
	</BrowserRouter>
);
