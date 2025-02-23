import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface IStatisticsCardProps {
	title: string;
	value: string | number | null | undefined;
	isLoading?: boolean;
}

const StatisticsCard: React.FC<IStatisticsCardProps> = ({
	title,
	value,
	isLoading,
}) => (
	<Box
		display="flex"
		gap={2}
		alignItems="center"
		justifyContent="space-between"
	>
		<Typography variant="h1" fontSize={24}>
			{title}
		</Typography>
		<Typography variant="h1" fontSize={24} fontWeight={400}>
			{value || "Error"}
		</Typography>
	</Box>
);

export default StatisticsCard;
