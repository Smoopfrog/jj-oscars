import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import { categories } from "../../Data/Nominees";

/**
 * A selector for the category of guesses to scroll to
 */
const GuessesSelector = () => {
	const [category, setCategory] = useState<string>("");
	const handleChange = (event: SelectChangeEvent) => {
		setCategory(event.target.value);

		// Scroll to the category
		const targetElement = document.getElementById(event.target.value);
		setTimeout(function () {
			targetElement?.scrollIntoView({
				behavior: "auto",
				block: "start",
			});
		}, 1);
	};

	return (
		<FormControl sx={{ width: "50%" }}>
			<InputLabel id="select-category-label" sx={{ color: "#c79f27" }}>
				Select a Category
			</InputLabel>
			<Select
				labelId="select-category-label"
				id="select-category"
				value={category}
				label="Select a Category"
				onChange={handleChange}
				sx={{
					borderRadius: "2px",
					background: "#ffffff",
					color: "#c79f27",
					border: "1px solid #c79f27",
				}}
			>
				{categories.map((category, i) => (
					<MenuItem key={i} value={category.title}>
						{category.title}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default GuessesSelector;
