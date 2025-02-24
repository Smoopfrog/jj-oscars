import React from "react";
import Card from "../../../Components/Cards/Card";
import { Box, Typography } from "@mui/material";
import { IResult } from "../../../types/api/Result";
import { getResultColor } from "../../../utils/fontUtils";

interface IMobileResultsCardProps {
	/** The category to display */
	category: IResult;
}

const MobileResultsCard = ({ category }: IMobileResultsCardProps) => {
	return (
		<Card>
			<Typography variant="h6" textAlign={"center"} mb={1} fontWeight={"bold"}>
				{category.name}
			</Typography>
			<Box display="flex" justifyContent="space-between">
				<Typography variant="h6" fontStyle={"italic"}>
					Winner
				</Typography>
				<Typography variant="h6">{category.winner || "-"}</Typography>
			</Box>
			<Box display="flex" justifyContent="space-between">
				<Typography variant="h6" fontStyle={"italic"}>
					Jordan
				</Typography>
				<Typography
					variant="h6"
					color={getResultColor(category.winner, category.jordan)}
				>
					{category.jordan || "-"}
				</Typography>
			</Box>
			<Box display="flex" justifyContent="space-between">
				<Typography variant="h6" fontStyle={"italic"}>
					Jeff
				</Typography>
				<Typography
					variant="h6"
					color={getResultColor(category.winner, category.jeff)}
				>
					{category.jeff || "-"}
				</Typography>
			</Box>
		</Card>
	);
};

export default MobileResultsCard;
