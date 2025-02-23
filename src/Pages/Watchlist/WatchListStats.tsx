import React, { useEffect } from "react";
import {
	Box,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { IWatchlist } from "../../types/api/Watchlist/WatchList";
import { formatStatValue } from "../../utils/formatString";
import { years } from "../../constants/Years";

interface WatchListStatsProps {
	/** The year of the watchlist */
	year: number;
	/** Handle year change */
	setYear: (year: number) => void;
	/** The movies in the watchlist */
	data: IWatchlist[];
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
			flexDirection={{ xs: "row", lg: "column" }}
			gap={{ xs: 16, lg: 1 }}
			alignItems={{ xs: "center", lg: "flex-end" }}
			position={{ xs: "relative", lg: "fixed" }}
			right={{ lg: "10%" }}
		>
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
					{years.map((year) => (
						<MenuItem value={year} key={year}>
							{year}
						</MenuItem>
					))}
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
	);
};

export default WatchListStats;
