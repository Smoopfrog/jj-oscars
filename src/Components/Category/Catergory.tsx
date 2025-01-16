import {
	Box,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Typography,
} from "@mui/material";
import { useField } from "formik";
import React from "react";
import { INomination } from "../../types/Nomination";

interface ICategoryProps {
	/** The Oscar category */
	category: string;
	/** The nominees for the category */
	nominees: INomination[];
}

const Category: React.FC<ICategoryProps> = ({ category, nominees }) => {
	const [field] = useField(category);

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
					name={field.name}
					value={field.value || ""}
					onChange={field.onChange}
					sx={{ display: "flex", flexDirection: "column", gap: 2 }}
				>
					{nominees.map((nominee, i) => (
						<FormControlLabel
							key={i}
							value={nominee.title}
							control={
								<Radio
									sx={{
										color: "white",
										"&.Mui-checked": {
											color: "white",
										},
									}}
								/>
							}
							label={
								<Box>
									<Typography sx={{ fontSize: 16, color: "white" }}>
										{nominee.title}
									</Typography>
									<Typography sx={{ fontSize: 12, color: "white" }}>
										{nominee.subtitle}
									</Typography>
								</Box>
							}
						/>
					))}
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

export default Category;
