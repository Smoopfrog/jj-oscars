import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

interface ISelectMenuProps {
	value: string;
	onChange: (event: SelectChangeEvent<string>) => void;
	menuItems: string[];
	fontSize?: number;
}

const SelectMenu = ({
	value,
	onChange,
	menuItems,
	fontSize = 34,
	...props
}: ISelectMenuProps) => {
	return (
		<Select
			labelId="year-select-label"
			id="year-select"
			value={value}
			variant="standard"
			onChange={onChange}
			sx={{
				color: "#E0E0E0",
				padding: 0,
				fontSize: fontSize,
				"&:hover": {
					color: "rgb(199, 159, 39)",
					"& .MuiSelect-icon": {
						color: "rgb(199, 159, 39)",
					},
				},
				"& .MuiSelect-select": {
					padding: 0,
				},
				"& .MuiSelect-icon": {
					color: "#E0E0E0",
				},
				"&:before": {
					borderBottom: "1px solid #E0E0E0",
				},
				"&:after": {
					borderBottom: "1px solid rgb(199, 159, 39)",
				},
				...props,
			}}
		>
			{menuItems.map((item: string, index: number) => (
				<MenuItem value={item} key={index}>
					{item}
				</MenuItem>
			))}
		</Select>
	);
};

export default SelectMenu;
