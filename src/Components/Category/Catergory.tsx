import {
	Box,
	FormControl,
	FormLabel,
	RadioGroup,
	Typography,
} from "@mui/material";
import { useField } from "formik";
import React from "react";
import Nominee from "./Nominee";
import { INominee } from "../../types/Nominee";

interface ICategoryProps {
	/** The Oscar category */
	category: string;
	/** The nominees for the category */
	nominees: INominee[];
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
					fontSize={32}
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
						<Nominee nominee={nominee} key={i} />
					))}
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

export default Category;
