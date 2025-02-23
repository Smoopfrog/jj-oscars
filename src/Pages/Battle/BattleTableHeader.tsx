import React from "react";
import { TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { IBattle } from "../../types/api/Battle";
import { winCount } from "../../utils/formatString";

interface IBattleTableHeaderProps {
	data: IBattle[] | null;
}

const BattleTableHeader: React.FC<IBattleTableHeaderProps> = ({ data }) => (
	<TableHead
		sx={{
			backgroundColor: "rgb(199, 159, 39)",
			position: "sticky",
			top: 0,
			zIndex: 1,
		}}
	>
		<TableRow>
			<TableCell>
				<Typography fontWeight="bold">Category</Typography>
			</TableCell>
			<TableCell align="right">
				<Typography fontWeight="bold">Winnner</Typography>
			</TableCell>
			<TableCell align="right">
				<Typography fontWeight="bold">
					Jordan {winCount(data, "jordan")}/23
				</Typography>
			</TableCell>
			<TableCell align="right">
				<Typography fontWeight="bold">
					Jeff {winCount(data, "jeff")}/23
				</Typography>
			</TableCell>
		</TableRow>
	</TableHead>
);

export default BattleTableHeader;
