import React, { useState } from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import {
	useGetWatchlist,
	WatchlistData,
} from "../../hooks/watchlist/useGetWatchlist";
import WatchListStats from "./WatchListStats";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";
import WatchlistForm from "./WatchlistForm";
import ErrorMessage from "../../Components/Error/ErrorMessage";
import { useGetRequest } from "../../hooks/useGetRequest";
import urls from "../../api/endpoint";
import Tabs from "../../Components/Tabs/Tabs";

export interface IMovieCategory {
	category: string;
	nominee: string;
}

const Watchlist = () => {
	const [year, setYear] = useState<number>(2025);
	const [watchedMoviesCount, setWatchedMoviesCount] = useState<number>(0);

	const { name } = useParams();

	if (!name) {
		return <Navigate to="/" />;
	}

	const { data, isLoading } = useGetRequest<WatchlistData[]>(
		urls.watchlist,
		{
			username: name,
			year,
		},
		[year]
	);

	return !isLoading ? (
		data ? (
			<Box
				display="flex"
				flexDirection="column"
				gap={2}
				alignItems="center"
				position="relative"
				mt={3}
				mx={{ xs: 2, md: 0 }}
			>
				<WatchListStats
					year={year}
					setYear={setYear}
					data={data}
					watchedMoviesCount={watchedMoviesCount}
					setWatchedMoviesCount={setWatchedMoviesCount}
				/>
				{data.length > 0 ? (
					<WatchlistForm
						data={data}
						name={name}
						setWatchedMoviesCount={setWatchedMoviesCount}
					/>
				) : (
					<ErrorMessage message="No movies found" />
				)}
			</Box>
		) : (
			<ErrorMessage />
		)
	) : (
		<LoadingSpinner />
	);
};

export default Watchlist;
