import React from "react";
import { ICategory } from "../../types/Category";
import WinnersCategory from "../../Components/Category/WinnersCategory";
import { Box } from "@mui/material";
import urls from "../../api/endpoint";
import axiosInstance from "../../api/axiosInstance";

interface IWinnersForm {
	/** The categories to display */
	categories: ICategory[];
	/** The year to display */
	year: number;
	/** Called after a winner is saved (e.g. to refetch data) */
	onWinnerSaved?: () => void;
}

const WinnersForm: React.FC<IWinnersForm> = ({ categories, year, onWinnerSaved }) => {
	const saveWinner = async (categoryId: number, nomineeId: number) => {
		const res = await axiosInstance.put(urls.winnersUpdate, {
			year,
			winners: { [categoryId]: nomineeId },
		});
		if (res.status !== 200) {
			throw new Error("Save failed");
		}
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			gap={2}
			alignItems="center"
			mx={{ xs: 2, md: 0 }}
			maxHeight="calc(100vh - 180px)"
			overflow="auto"
		>
			<Box display="flex" flexDirection="column" gap={3}>
				{categories.map((category: ICategory, i: number) => (
					<WinnersCategory
						key={category.id}
						id={category.id}
						title={category.title}
						nominees={category.nominees}
						selectedValue={category.prediction ?? null}
						onSave={saveWinner}
						onSaved={onWinnerSaved}
					/>
				))}
			</Box>
		</Box>
	);
};

export default WinnersForm;
