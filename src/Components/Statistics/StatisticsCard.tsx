import React from "react";
import { Box, Typography } from "@mui/material";

interface IStatisticsCardProps {
	title: string;
	value: string | number;
}

const StatisticsCard: React.FC<IStatisticsCardProps> = ({ title, value }) => {
	return (
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
				{value}
			</Typography>
		</Box>
	);
};

export default StatisticsCard;
