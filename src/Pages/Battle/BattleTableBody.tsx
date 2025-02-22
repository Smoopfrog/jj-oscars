import React from "react";
import BattleTableItem from "./BattleTableItem";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { IWinnerAPI } from "../../hooks/winners/getWinners";
import ErrorMessage from "../../Components/Error/ErrorMessage";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";

interface IBattleTableBodyProps {
	data: IWinnerAPI[] | null;
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
