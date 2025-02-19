import React from "react";
import { TableCell, TableHead, TableRow, Typography } from "@mui/material";

const TableHeader = () => {
	return (
		<TableHead sx={{ backgroundColor: "rgb(199, 159, 39)" }}>
			<TableRow>
				<TableCell>
					<Typography fontWeight="bold">Category name</Typography>
				</TableCell>
				<TableCell align="right">
					<Typography fontWeight="bold">Winnner</Typography>
				</TableCell>
				<TableCell align="right">
					<Typography fontWeight="bold">Jordan (0/23)</Typography>
				</TableCell>
				<TableCell align="right">
					<Typography fontWeight="bold">Jeff (0/23)</Typography>
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default TableHeader;
