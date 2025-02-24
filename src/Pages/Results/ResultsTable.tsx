import React from "react";
import { Table, TableContainer } from "@mui/material";
import Card from "../../Components/Cards/Card";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";
import { useGetRequest } from "../../hooks/useGetRequest";
import urls from "../../api/endpoint";
import { IResult } from "../../types/api/Result";
import ResultsTableHeader from "./ResultsTableHeader";
import ResultsTableBody from "./ResultsTableBody";

interface IResultsTableProps {
	/** The year to display results for */
	year: number;
}

const ResultsTable: React.FC<IResultsTableProps> = ({ year }) => {
	const { data, isLoading } = useGetRequest<IResult[]>(
		urls.results,
		{
			year,
			username: "jordan",
			opponent: "jeff",
		},
		[year]
	);

	return isLoading ? (
		<LoadingSpinner />
	) : (
		<TableContainer
			sx={{
				width: { xs: "100%", md: "80%", lg: "60%" },
				padding: 0,
				height: "100%",
				overflow: "auto",
			}}
			component={Card}
		>
			<Table aria-label="results-table">
				<ResultsTableHeader data={data} />
				<ResultsTableBody data={data} />
			</Table>
		</TableContainer>
	);
};

export default ResultsTable;
