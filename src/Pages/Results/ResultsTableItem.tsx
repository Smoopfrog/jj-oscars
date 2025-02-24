import React from "react";
import { Typography, TableCell, TableRow } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { IResult } from "../../types/api/Result";
import { getResultColor } from "../../utils/fontUtils";

interface IResultsTableItemProps {
	/** The index of the item in the table */
	index: number;
	/** The category to display */
	category: IResult;
}

const ResultsTableItem: React.FC<IResultsTableItemProps> = ({
	index,
	category,
}) => {
	const { name } = useParams();

	if (!name) {
		return <Navigate to="/" />;
	}

	return (
		<TableRow
			sx={
				index % 2 !== 0
					? { backgroundColor: "rgb(199, 159, 39, 0.05)" }
					: { backgroundColor: undefined }
			}
		>
			<TableCell>
				<Typography fontStyle="italic">{category.name}</Typography>
			</TableCell>
			<TableCell>
				<Typography align="right">{category.winner || "-"}</Typography>
			</TableCell>
			<TableCell>
				<Typography
					align="right"
					color={getResultColor(category.winner, category.jordan)}
				>
					{category.jordan || "-"}
				</Typography>
			</TableCell>
			<TableCell>
				<Typography
					align="right"
					color={getResultColor(category.winner, category.jeff)}
				>
					{category.jeff || "-"}
				</Typography>
			</TableCell>
		</TableRow>
	);
};

export default ResultsTableItem;
