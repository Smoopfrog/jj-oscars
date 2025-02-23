import React, { useState } from "react";
import {
	Box,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import dayjs from "dayjs";
import BattleTable from "./BattleTable";
import { years } from "../../constants/Years";

const Battle = () => {
	const [year, setYear] = useState<number>(dayjs().year());

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			gap={2}
			justifyContent={"space-between"}
			maxHeight={"calc(100vh - 80px)"}
		>
			<Box display={"flex"} gap={1} alignItems={"center"}>
				<Typography variant="h4" color="#E0E0E0">
					Oscar Battle{" "}
				</Typography>
				<Select
					labelId="year-select-label"
					id="year-select"
					value={year}
					variant="standard"
					onChange={(e: SelectChangeEvent<number>) =>
						setYear(e.target.value as number)
					}
					sx={{
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
							color: "#E0E0E0", // Change arrow color here
						},
						"&:before": {
							display: "none", // Change underline color here
						},
						"&:after": {
							display: "none", // Change underline color when focused
						},
					}}
				>
					{years.map((year) => (
						<MenuItem value={year} key={year}>
							{year}
						</MenuItem>
					))}
				</Select>
			</Box>
			<BattleTable year={year} />
		</Box>
	);
};

export default Battle;
