import { Box, Typography } from "@mui/material";
import React from "react";
import BattleTableItem from "./BattleTableItem";

const BattleTable = () => {
	return (
		<Box display={"flex"} flexDirection={"column"} gap={2}>
			<Box display={"flex"} justifyContent={"space-between"}>
				<Typography>JG 0/23</Typography>
				<Typography>Winner</Typography>
				<Typography>JS 0/23</Typography>
			</Box>
			<BattleTableItem />
		</Box>
	);
};

export default BattleTable;
