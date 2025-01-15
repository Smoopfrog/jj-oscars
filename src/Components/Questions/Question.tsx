import {
	Box,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Typography,
} from "@mui/material";
import React from "react";

interface IQuestionProps {
	/** The Oscar category */
	category: string;
	/** The nominees for the category */
	nominees: string[];
}

const Question = ({ category, nominees }: IQuestionProps) => {
	return (
		<Box
			sx={{ display: "flex", flexDirection: "column", width: "100%", mb: 2 }}
		>
			<FormLabel id={`${category}-radio-buttons-group-label`}>
				<Typography
					color="rgb(199, 159, 39)"
					fontSize={40}
					textTransform="uppercase"
				>
					{category}
				</Typography>
			</FormLabel>
			<FormControl>
				<RadioGroup
					aria-labelledby={`${category}-radio-buttons-group-label`}
					name="radio-buttons-group"
				>
					{nominees.map((nominee, i) => (
						<FormControlLabel
							key={i}
							value={nominee}
							control={<Radio sx={{ color: "white" }} />}
							label={nominee}
							sx={{ fontSize: 16, color: "white" }}
						/>
					))}
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

export default Question;
