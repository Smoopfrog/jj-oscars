import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import NominatedMovie from "./NominatedMovie";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import {
	useGetWatchlist,
	WatchlistData,
} from "../../hooks/watchlist/useGetWatchlist";
import { putWatchlist } from "../../api/service/watchlistService";
import WatchListStats from "./WatchListStats";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";
import WatchlistForm from "./WatchlistForm";
import ErrorMessage from "../../Components/Error/ErrorMessage";

export interface IMovieCategory {
	category: string;
	nominee: string;
}

const Watchlist = () => {
	const [watchedMoviesCount, setWatchedMoviesCount] = useState<number>(0);

	const { name } = useParams();

	if (!name) {
		return null;
	}

	const { data, isLoading } = useGetWatchlist(name as string);

	return (
		<Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
			{!isLoading ? (
				data ? (
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
							alignItems: "center",
							position: "relative",
						}}
					>
						<WatchListStats
							data={data}
							watchedMoviesCount={watchedMoviesCount}
							setWatchedMoviesCount={setWatchedMoviesCount}
						/>
						<WatchlistForm
							data={data}
							name={name}
							setWatchedMoviesCount={setWatchedMoviesCount}
						/>
					</Box>
				) : (
					<ErrorMessage />
				)
			) : (
				<LoadingSpinner />
			)}
		</Box>
	);
};

export default Watchlist;
