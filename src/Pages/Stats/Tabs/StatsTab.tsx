import React from "react";
import StatisticsCard from "../../../Components/Statistics/StatisticsCard";
import { Box, CircularProgress } from "@mui/material";
import { useGetStats } from "../../../hooks/stats/useGetStats";
import LoadingSpinner from "../../../Components/loading/LoadingSpinner";

interface IStatsTabProps {
	name: string;
	year?: number;
}
const formatStatValue = (value: number, total: number) => {
	if (value !== 0 || !total) return null;

	return `${value}/${total} (${(value / total) * 100}%)`;
};

const StatsTab: React.FC<IStatsTabProps> = ({ name, year }) => {
	const { data, isLoading } = useGetStats(name, year);

	return (
		<Box display="flex" flexDirection="column" gap={1}>
			{!isLoading ? (
				<>
					{year ? (
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
					)}
					<StatisticsCard
						title="Guess Percentage"
						value={formatStatValue(data?.correct_guesses, data?.total_movies)}
						isLoading={isLoading}
					/>
					<StatisticsCard
						title="Movies Watched"
						value={formatStatValue(data?.watched_movies, data?.total_movies)}
						isLoading={isLoading}
					/>
				</>
			) : (
				<Box display="flex" justifyContent="center" alignItems="center">
					<CircularProgress
						sx={{ color: "rgb(199, 159, 39)", textAlign: "center" }}
						size={24}
					/>
				</Box>
			)}
		</Box>
	);
};

export default StatsTab;
