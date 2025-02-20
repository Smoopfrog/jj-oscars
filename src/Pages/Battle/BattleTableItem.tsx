import React from "react";
import { Typography, TableCell, TableRow } from "@mui/material";

interface BattleTableItemProps {
	/** The index of the item in the table */
	index: number;
}

const BattleTableItem: React.FC<BattleTableItemProps> = ({ index }) => {
	return (
		<TableRow
			sx={
				index % 2 !== 0
					? { backgroundColor: "rgb(199, 159, 39, 0.05)" }
					: { backgroundColor: undefined }
			}
		>
			<TableCell>
				<Typography fontStyle="italic">Category</Typography>
			</TableCell>
			<TableCell>
				<Typography align="right">-</Typography>
			</TableCell>
			<TableCell>
				<Typography align="right">-</Typography>
			</TableCell>
			<TableCell>
				<Typography align="right">-</Typography>
			</TableCell>
		</TableRow>
	);
};

export default BattleTableItem;
