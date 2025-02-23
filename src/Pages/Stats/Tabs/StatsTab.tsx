import React from "react";
import { Box } from "@mui/material";
import WatchedCount from "../WatchedCount";
import GuessAccuracy from "../GuessAccuracy";
import Winner from "../Winner";
import WinLoss from "../WinLoss";
import Scores from "../Scores";

interface IStatsTabProps {
	/** The username of the user */
	name: string;
	/** The year of the stats */
	year?: number;
}

const StatsTab: React.FC<IStatsTabProps> = ({ name, year }) => {
	return (
		<Box display="flex" flexDirection="column" gap={1} p={2}>
			{year ? (
				<Winner username={name} year={year} />
			) : (
				<WinLoss username={name} />
			)}
			<Scores username={name} year={year} />
			<GuessAccuracy username={name} year={year} />
			<WatchedCount username={name} year={year} />
		</Box>
	);
};

export default StatsTab;
