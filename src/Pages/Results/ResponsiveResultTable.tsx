import React from "react";
import {
	Card,
	Table,
	TableContainer,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { IResult } from "../../types/api/Result";
import ResultsTableHeader from "./ResultsTableHeader";
import ResultsTableBody from "./ResultsTableBody";
import MobileResults from "./MobileResults/MobileResults";

interface IResponsiveResultTableProps {
	/** The data to display in the table */
	data: IResult[] | null;
}

const ResponsiveResultTable: React.FC<IResponsiveResultTableProps> = ({
	data,
}) => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

	return isSmallScreen ? (
		<MobileResults data={data} />
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

export default ResponsiveResultTable;
