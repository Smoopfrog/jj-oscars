import React from "react";
import BattleTableItem from "./BattleTableItem";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { IWinnerAPI } from "../../hooks/winners/getWinners";
import ErrorMessage from "../../Components/Error/ErrorMessage";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";

interface IBattleTableBodyProps {
	data: IWinnerAPI[] | null;
	isLoading: boolean;
}

const BattleTableBody: React.FC<IBattleTableBodyProps> = ({
	data,
	isLoading,
}) => {
	return (
		<TableBody>
			{isLoading ? (
				<TableRow>
					<TableCell colSpan={4}>
						<LoadingSpinner />
					</TableCell>
				</TableRow>
			) : data ? (
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
