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
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			minWidth={46}
		>
			<Typography color="#696969" fontSize={20} mb={0}>
				{value < 10 ? `0${value}` : value}
			</Typography>
			<Typography color="#696969" fontSize={10} mt={0}>
				{unit}
			</Typography>
		</Box>
	);
};

export default CountdownUnit;
