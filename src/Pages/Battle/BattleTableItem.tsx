import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";

const BattleTableItem = () => {
	return (
		<Box display={"flex"} flexDirection={"column"}>
			<Typography variant="h6" textAlign={"center"}>
				Category name
			</Typography>
			<Box display={"flex"} gap={2}>
				<Typography variant="h6" width={"33%"} flexWrap={"wrap"}>
					Movie namasdfasdfasdfasdfsfasfsde 1
				</Typography>
				<Typography variant="h6" width={"33%"} flexWrap={"wrap"}>
					Winning movie name
				</Typography>
				<Typography variant="h6" width={"33%"} flexWrap={"wrap"}>
					Movie name 2
				</Typography>
			</Box>
		</Box>
	);
};

export default BattleTableItem;
