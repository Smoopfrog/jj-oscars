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
	const [field, meta] = useField({
		name: id,
		validate: (value: string) => {
			let error;
			if (!value) {
				error = "You missed this one dumb dumb!";
			}
			return error;
		},
	});

	return (
		<Box
			id={title}
			display={"flex"}
			flexDirection={"column"}
			className={meta.touched && meta.error ? "error" : ""}
		>
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
			{meta.touched && meta.error && (
				<Typography color="error" mb={1}>
					{meta.error}
				</Typography>
			)}
			<FormControl error={Boolean(meta.touched && meta.error)}>
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
