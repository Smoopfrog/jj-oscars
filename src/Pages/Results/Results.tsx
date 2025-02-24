import React, { useEffect, useState } from "react";
import {
	Box,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import dayjs from "dayjs";
import BattleTable from "./ResultsTable";
import { years } from "../../constants/Years";
import { useLocation, useNavigate } from "react-router-dom";
import YearSelect from "../../Components/Select/YearSelect";
import ResultsTable from "./ResultsTable";

const Results = () => {
	const location = useLocation();

	const [year, setYear] = useState<number>(
		location.hash ? parseInt(location.hash.slice(1)) : dayjs().year()
	);

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
				<YearSelect year={year} setYear={setYear} />
			</Box>
			<ResultsTable year={year} />
		</Box>
	);
};

export default Results;
