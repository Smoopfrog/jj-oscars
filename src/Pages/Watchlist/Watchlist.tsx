import React, { useState } from "react";
import { Box } from "@mui/material";
import { Navigate, useLocation, useParams } from "react-router-dom";
import WatchListStats from "./WatchListStats";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";
import WatchlistForm from "./WatchlistForm";
import ErrorMessage from "../../Components/Error/ErrorMessage";
import { useGetRequest } from "../../hooks/useGetRequest";
import urls from "../../api/endpoint";
import { IWatchlist } from "../../types/api/Watchlist/WatchList";
import dayjs from "dayjs";

const Watchlist = () => {
	const location = useLocation();

	const [year, setYear] = useState<number>(
		location.hash ? parseInt(location.hash.slice(1)) : dayjs().year()
	);
	console.log(year);

	const [watchedMoviesCount, setWatchedMoviesCount] = useState<number>(0);

	const { name } = useParams();

	if (!name) {
		return <Navigate to="/" />;
	}

	const { data, isLoading } = useGetRequest<IWatchlist[]>(
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
				mx={{ xs: 2, md: 0 }}
				maxHeight="calc(100vh - 80px)"
				overflow="auto"
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
