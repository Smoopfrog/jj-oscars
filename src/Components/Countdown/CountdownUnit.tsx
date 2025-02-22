import { Box, Typography } from "@mui/material";
import React from "react";

interface ICountdownUnitProps {
	/** The value of the countdown unit */
	value: number;
	/** The unit of the countdown */
	unit: string;
}

const CountdownUnit: React.FC<ICountdownUnitProps> = ({ value, unit }) => {
	return (
		<Box display={"flex"} gap={1} alignItems={"center"}>
			<Box
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
				minWidth={84}
			>
				<Typography fontSize={40} mb={0} lineHeight={1}>
					{value < 10 ? `0${value}` : value}
				</Typography>
				<Typography fontSize={20} mt={0}>
					{unit}
				</Typography>
			</Box>
			{unit !== "Seconds" && (
				<Typography fontSize={20} mt={0}>
					:
				</Typography>
			)}
		</Box>
	);
};

export default CountdownUnit;
