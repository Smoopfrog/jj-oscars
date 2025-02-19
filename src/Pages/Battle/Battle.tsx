import { Box, Table, Typography } from "@mui/material";
import React from "react";
import BattleTable from "./BattleTable";

const Battle = () => {
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			gap={2}
			mb={5}
		>
			<Typography variant="h4">Oscar Battle 2025</Typography>
			<BattleTable />
		</Box>
	);
};

export default Battle;
