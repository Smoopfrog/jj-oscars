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
	/** The id of the category */
	id: number;
	/** The title of the category */
	title: string;
	/** The nominees for the category */
	nominees: INominee[];
}

const Category: React.FC<ICategoryProps> = ({ id, title, nominees }) => {
	const [field] = useField(id);

	return (
		<Box id={title} display={"flex"} flexDirection={"column"}>
			<FormLabel id={`${title}-radio-buttons-group-label`}>
				<Typography
					color="rgb(199, 159, 39)"
					fontSize={32}
					textTransform="uppercase"
					lineHeight={1.2}
					mb={0.5}
				>
					{title}
				</Typography>
			</FormLabel>
			<FormControl>
				<RadioGroup
					aria-labelledby={`${title}-radio-buttons-group-label`}
					name={field.name}
					value={field.value || ""}
					onChange={field.onChange}
					sx={{ display: "flex", flexDirection: "column", gap: 1 }}
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
