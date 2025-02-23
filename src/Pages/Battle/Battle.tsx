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

const Battle = () => {
	const [year, setYear] = useState<number>(dayjs().year());

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			gap={2}
			mb={5}
			mt={3}
		>
			<Box
				display={"flex"}
				gap={1}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Typography variant="h4">Oscar Battle </Typography>
				<Select
					labelId="year-select-label"
					id="year-select"
					value={year}
					label={
						<Typography variant="h4" fontSize={34}>
							{year}
						</Typography>
					}
					variant="standard"
					onChange={(e: SelectChangeEvent<number>) =>
						setYear(e.target.value as number)
					}
					sx={{
						padding: 0,
						fontSize: 34,
						"& .MuiSelect-select": {
							padding: 0,
						},
					}}
				>
					<MenuItem value={2025}>2025</MenuItem>
					<MenuItem value={2024}>2024</MenuItem>
				</Select>
			</Box>
			<BattleTable year={year} />
		</Box>
	);
};

export default Battle;
