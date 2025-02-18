import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { IMovieCategory } from "./Watchlist";
import { WatchlistData } from "../../hooks/watchlist/useGetWatchlist";

interface WatchListStatsProps {
	/** The number of movies watched */
	watchedMoviesCount: number;
	/** The movies in the watchlist */
	movies: WatchlistData[];
}

const WatchListStats: React.FC<WatchListStatsProps> = ({
	watchedMoviesCount,
	movies,
}) => {
	const watchedMoviesPercentage = (watchedMoviesCount / movies.length) * 100;

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="flex-end"
			gap={1}
			marginLeft="auto"
			position="fixed"
			right="10%"
		>
			{watchedMoviesCount === Object.keys(movies).length && (
				<StarIcon
					sx={{ color: "rgb(199, 159, 39)", position: "relative" }}
					fontSize="large"
				/>
			)}
			<Typography color="rgb(46,46,46, 0.8)" variant="h4">
				{watchedMoviesCount}/{movies.length} (
				{watchedMoviesPercentage.toFixed(2)}%)
			</Typography>
		</Box>
	);
};

export default WatchListStats;
