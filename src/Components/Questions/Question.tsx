import { Box, Typography } from "@mui/material";
import React from "react";

interface IQuestionProps {
	category: string;
	nominees: string[];
}

const Question = ({ category, nominees }: IQuestionProps) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
			<Typography
				color="rgb(199, 159, 39)"
				fontSize={40}
				textTransform="uppercase"
			>
				{category}
			</Typography>
			{nominees.map((nominee) => (
				<Typography key={nominee} fontSize={16} color="white">
					{nominee}
				</Typography>
			))}
		</Box>
	);
};

export default Question;
