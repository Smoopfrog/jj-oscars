import React from "react";
import { Table, TableContainer } from "@mui/material";
import { useGetWinners } from "../../hooks/winners/getWinners";
import Card from "../../Components/Cards/Card";
import TableHeader from "./BattleTableHeader";
import BattleTableBody from "./BattleTableBody";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";

const BattleTable = ({ year }: { year: number }) => {
	const { data, isLoading } = useGetWinners(year, "jordan", "jeff");

	return isLoading ? (
		<LoadingSpinner />
	) : (
		<TableContainer
			sx={{
				width: { xs: "100%", md: "80%", lg: "60%" },
				padding: 0,
			}}
			component={Card}
		>
			<Table aria-label="battle-table">
				<TableHeader data={data} />
				<BattleTableBody data={data} />
			</Table>
		</TableContainer>
	);
};

export default BattleTable;
