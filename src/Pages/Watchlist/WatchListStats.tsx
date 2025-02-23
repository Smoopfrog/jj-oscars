import React, { useEffect } from "react";
import {
	Box,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { IMovieCategory } from "./Watchlist";
import { WatchlistData } from "../../hooks/watchlist/useGetWatchlist";
import { formatStatValue } from "../../utils/formatString";

interface WatchListStatsProps {
	/** The year of the watchlist */
	year: number;
	/** Handle year change */
	setYear: (year: number) => void;
	/** The movies in the watchlist */
	data: WatchlistData[];
	/** The number of movies watched */
	watchedMoviesCount: number;
	/** Set watched movies count */
	setWatchedMoviesCount: (count: number) => void;
}

const WatchListStats: React.FC<WatchListStatsProps> = ({
	year,
	setYear,
	data,
	watchedMoviesCount,
	setWatchedMoviesCount,
}) => {
	useEffect(() => {
		setWatchedMoviesCount(data.filter((movie) => movie.viewed).length);
	}, []);

	return (
		<Box
			display="flex"
			gap={1}
			position={{ xs: "relative", lg: "fixed" }}
			right={{ lg: "10%" }}
		>
			<Box>
				<Box display="flex" gap={1} justifyContent="flex-end">
					<Select
						labelId="year-select-label"
						id="year-select"
						value={year}
						label={
							<Typography variant="h4" fontSize={34}>
								{year}
							</Typography>
						}
						variant="standard"
						onChange={(e: SelectChangeEvent<number>) =>
							setYear(e.target.value as number)
						}
						sx={{
							padding: 0,
							fontSize: 34,
							"& .MuiSelect-select": {
								padding: 0,
							},
						}}
					>
						<MenuItem value={2025}>2025</MenuItem>
						<MenuItem value={2024}>2024</MenuItem>
						<MenuItem value={2023}>2023</MenuItem>
						<MenuItem value={2022}>2022</MenuItem>
						<MenuItem value={2021}>2021</MenuItem>
						<MenuItem value={2020}>2020</MenuItem>
						<MenuItem value={2019}>2019</MenuItem>
						<MenuItem value={2018}>2018</MenuItem>
						<MenuItem value={2017}>2017</MenuItem>
					</Select>
				</Box>

				{data.length > 0 && (
					<Box display="flex" gap={1}>
						{watchedMoviesCount === data.length && (
							<StarIcon
								sx={{ color: "rgb(199, 159, 39)", position: "relative" }}
								fontSize="large"
							/>
						)}
						<Typography color="rgb(46,46,46, 0.8)" variant="h4">
							{formatStatValue(watchedMoviesCount, data.length)}
						</Typography>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default WatchListStats;
