import React from "react";
import StatisticsCard from "../../../Components/Statistics/StatisticsCard";
import { Box } from "@mui/material";

interface IStatsTabProps {
	year?: number;
}

const StatsTab: React.FC<IStatsTabProps> = ({ year }) => {
	return (
		<Box display="flex" flexDirection="column" gap={1}>
			{year ? (
				<StatisticsCard title="Winner" value="Jeff" />
			) : (
				<StatisticsCard title="W/L" value="100/100" />
			)}
			<StatisticsCard title="Guess Percentage" value="23/50 (46%)" />
			<StatisticsCard title="Movies Watched" value="23/50 (46%)" />
		</Box>
	);
};

export default StatsTab;
