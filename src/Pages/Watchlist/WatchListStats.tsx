import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { IMovieCategory } from "./Watchlist";
import { WatchlistData } from "../../hooks/watchlist/useGetWatchlist";

interface WatchListStatsProps {
	/** The movies in the watchlist */
	data: WatchlistData[];
	/** The number of movies watched */
	watchedMoviesCount: number;
	/** Set watched movies count */
	setWatchedMoviesCount: (count: number) => void;
}

const WatchListStats: React.FC<WatchListStatsProps> = ({
	data,
	watchedMoviesCount,
	setWatchedMoviesCount,
}) => {
	useEffect(() => {
		setWatchedMoviesCount(data.filter((movie) => movie.viewed).length);
	}, []);

	const watchedMoviesPercentage = (watchedMoviesCount / data.length) * 100;

	return (
		<Box
			display="flex"
			gap={1}
			position={{ xs: "relative", lg: "fixed" }}
			right={{ lg: "10%" }}
		>
			{watchedMoviesCount === Object.keys(data).length && (
				<StarIcon
					sx={{ color: "rgb(199, 159, 39)", position: "relative" }}
					fontSize="large"
				/>
			)}
			<Typography color="rgb(46,46,46, 0.8)" variant="h4">
				{watchedMoviesCount}/{data.length} ({watchedMoviesPercentage.toFixed(2)}
				%)
			</Typography>
		</Box>
	);
};

export default WatchListStats;
