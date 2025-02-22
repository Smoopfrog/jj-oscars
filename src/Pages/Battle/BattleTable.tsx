import React from "react";
import { Table, TableBody, TableContainer } from "@mui/material";
import TableHeader from "./TableHeader";
import BattleTableItem from "./BattleTableItem";
import Card from "../../Components/Cards/Card";
import { useGetWinners } from "../../hooks/winners/getWinners";
import BattleTableBody from "./BattleTableBody";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";

const BattleTable = ({ year }: { year: number }) => {
	const { data, isLoading } = useGetWinners(year, "jordan", "jeff");

	console.log(data);
	return (
		<TableContainer
			sx={{
				width: { xs: "100%", md: "80%", lg: "60%" },
				padding: 0,
			}}
			component={Card}
		>
			<Table aria-label="battle-table">
				<TableHeader />
				<BattleTableBody data={data} isLoading={isLoading} />
			</Table>
		</TableContainer>
	);
};

export default BattleTable;
