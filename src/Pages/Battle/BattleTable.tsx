import React from "react";
import { Table, TableContainer } from "@mui/material";
import Card from "../../Components/Cards/Card";
import TableHeader from "./BattleTableHeader";
import BattleTableBody from "./BattleTableBody";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";
import { useGetRequest } from "../../hooks/useGetRequest";
import urls from "../../api/endpoint";
import { IBattle } from "../../types/api/Battle";

const BattleTable = ({ year }: { year: number }) => {
	const { data, isLoading } = useGetRequest<IBattle[]>(urls.winners, {
		year,
		username: "jordan",
		opponent: "jeff",
	});

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
			<Table aria-label="battle-table">
				<TableHeader data={data} />
				<BattleTableBody data={data} />
			</Table>
		</TableContainer>
	);
};

export default BattleTable;
