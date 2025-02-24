import React from "react";
import ResultsTableItem from "./ResultsTableItem";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { IResult } from "../../types/api/Result";
import ErrorMessage from "../../Components/Error/ErrorMessage";

interface IResultsTableBodyProps {
	data: IResult[] | null;
}

const ResultsTableBody: React.FC<IResultsTableBodyProps> = ({ data }) => {
	return (
		<TableBody>
			{data ? (
				data.map((category, i) => (
					<ResultsTableItem key={category.id} index={i} category={category} />
				))
			) : (
				<TableRow>
					<TableCell colSpan={4}>
						<ErrorMessage />
					</TableCell>
				</TableRow>
			)}
		</TableBody>
	);
};

export default ResultsTableBody;
