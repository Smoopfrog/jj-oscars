import { MenuItem, SelectChangeEvent } from "@mui/material";
import React, { useEffect } from "react";
import { years } from "../../constants/Years";
import { Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

interface IYearSelectProps {
	/** The year to display */
	year: number;
	/** The function to set the year */
	setYear: (year: number) => void;
	/** Whether to hide the year select */
	hide?: boolean;
}

const YearSelect: React.FC<IYearSelectProps> = ({
	year,
	setYear,
	hide = false,
}) => {
	const navigate = useNavigate();

	useEffect(() => {
		setYear(location.hash ? parseInt(location.hash.slice(1)) : dayjs().year());
	}, []);

	return (
		<Select
			labelId="year-select-label"
			id="year-select"
			value={year}
			variant="standard"
			onChange={(e: SelectChangeEvent<number>) => {
				navigate(`#${e.target.value}`);
				setYear(e.target.value as number);
			}}
			sx={{
				display: hide ? "none" : "inline-block",
				color: "#E0E0E0",
				padding: 0,
				fontSize: 34,
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
			}}
		>
			{years.map((year) => (
				<MenuItem value={year} key={year}>
					{year}
				</MenuItem>
			))}
		</Select>
	);
};

export default YearSelect;
