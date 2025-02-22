import React, { useState } from "react";
import { Box } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { useGetWatchlist } from "../../hooks/watchlist/useGetWatchlist";
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
		return <Navigate to="/" />;
	}

	const { data, isLoading } = useGetWatchlist(name as string);

	return (
		<Box>
			{!isLoading ? (
				data ? (
					<Box
						display="flex"
						flexDirection="column"
						gap={2}
						alignItems="center"
						position="relative"
						mx={{ xs: 2, md: 0 }}
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
