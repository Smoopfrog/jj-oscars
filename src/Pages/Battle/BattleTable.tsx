import React from "react";
import { Table, TableBody, TableContainer } from "@mui/material";
import TableHeader from "./TableHeader";
import BattleTableItem from "./BattleTableItem";
import Card from "../../Components/Cards/Card";

const BattleTable = () => {
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
				<TableBody>
					<BattleTableItem index={0} />
					<BattleTableItem index={1} />
					<BattleTableItem index={2} />
					<BattleTableItem index={3} />
					<BattleTableItem index={4} />
					<BattleTableItem index={5} />
					<BattleTableItem index={6} />
					<BattleTableItem index={7} />
					<BattleTableItem index={8} />
					<BattleTableItem index={9} />
					<BattleTableItem index={10} />
					<BattleTableItem index={11} />
					<BattleTableItem index={12} />
					<BattleTableItem index={13} />
					<BattleTableItem index={14} />
					<BattleTableItem index={15} />
					<BattleTableItem index={16} />
					<BattleTableItem index={17} />
					<BattleTableItem index={18} />
					<BattleTableItem index={19} />
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default BattleTable;
