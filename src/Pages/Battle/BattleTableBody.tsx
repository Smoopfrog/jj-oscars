import React from "react";
import BattleTableItem from "./BattleTableItem";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { IBattle } from "../../types/api/Battle";
import ErrorMessage from "../../Components/Error/ErrorMessage";

interface IBattleTableBodyProps {
	data: IBattle[] | null;
}

const BattleTableBody: React.FC<IBattleTableBodyProps> = ({ data }) => {
	return (
		<TableBody>
			{data ? (
				data.map((category, i) => (
					<BattleTableItem key={category.id} index={i} category={category} />
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

export default BattleTableBody;
