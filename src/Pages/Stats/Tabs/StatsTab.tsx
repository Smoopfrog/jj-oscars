import React from "react";
import StatisticsCard from "../../../Components/Statistics/StatisticsCard";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetStats } from "../../../hooks/stats/useGetStats";
import LoadingSpinner from "../../../Components/loading/LoadingSpinner";
import WatchedCount from "../WatchedCount";
import { formatStatValue } from "../../../utils/formatString";
import GuessAccuracy from "../GuessAccuracy";

interface IStatsTabProps {
	/** The username of the user */
	name: string;
	/** The year of the stats */
	year?: number;
}

const StatsTab: React.FC<IStatsTabProps> = ({ name, year }) => {
	return (
		<Box display="flex" flexDirection="column" gap={1} p={2}>
			{/* {year ? (
						<StatisticsCard
							title="Winner"
							value={data?.winner}
							isLoading={isLoading}
						/>
					) : (
						<StatisticsCard
							title="W/L"
							value={formatStatValue(data?.correct_guesses, data?.nominations)}
							isLoading={isLoading}
						/>
					)} */}
			<GuessAccuracy username={name} year={year} />
			<WatchedCount username={name} year={year} />
		</Box>
	);
};

export default StatsTab;
