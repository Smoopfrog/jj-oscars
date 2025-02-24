import React from "react";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";
import { useGetRequest } from "../../hooks/useGetRequest";
import urls from "../../api/endpoint";
import { IResult } from "../../types/api/Result";
import ResponsiveResultTable from "./ResponsiveResultTable";

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

	return isLoading ? <LoadingSpinner /> : <ResponsiveResultTable data={data} />;
};

export default ResultsTable;
