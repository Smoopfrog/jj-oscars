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
import YearSelect from "../../Components/Select/YearSelect";

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
				<YearSelect
					year={year}
					setYear={setYear}
					watchlistYears={[...years, 2021, 2020, 2019]}
				/>
			</Box>

			{data.length > 0 && (
				<Box display="flex" gap={1}>
					{watchedMoviesCount === data.length && (
						<StarIcon
							sx={{ color: "rgb(199, 159, 39)", position: "relative" }}
							fontSize="large"
						/>
					)}
					<Typography color="#E0E0E0" variant="h4">
						{formatStatValue(watchedMoviesCount, data.length, false)}
					</Typography>
				</Box>
			)}
		</Box>
	);
};

export default WatchListStats;
