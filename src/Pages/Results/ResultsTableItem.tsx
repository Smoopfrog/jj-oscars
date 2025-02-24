import React from "react";
import { Typography, TableCell, TableRow } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { IResult } from "../../types/api/Result";

interface IResultsTableItemProps {
	/** The index of the item in the table */
	index: number;
	/** The category to display */
	category: IResult;
}

const getColor = (winner: string | null, prediction: string | null) => {
	if (!winner || !prediction) return "";
	return winner === prediction ? "success" : "error";
};

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
					color={getColor(category.winner, category.jordan)}
				>
					{(name === "jordan" && category.jordan) || "-"}
				</Typography>
			</TableCell>
			<TableCell>
				<Typography
					align="right"
					color={getColor(category.winner, category.jeff)}
				>
					{(name === "jeff" && category.jeff) || "-"}
				</Typography>
			</TableCell>
		</TableRow>
	);
};

export default ResultsTableItem;
