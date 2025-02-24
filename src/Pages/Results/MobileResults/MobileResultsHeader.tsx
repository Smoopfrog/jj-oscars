import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { winCount } from "../../../utils/formatString";
import { IResult } from "../../../types/api/Result";

interface IMobileResultsHeaderProps {
	/** Results data */
	data: IResult[];
}

const MobileResultsHeader: React.FC<IMobileResultsHeaderProps> = ({ data }) => (
	<Box color="#E0E0E0">
		<Box display={"flex"} justifyContent={"space-between"}>
			<Typography variant="h6" fontWeight={"bold"}>
				Winner
			</Typography>
			<Typography variant="h6">
				{winCount(data, "jordan") > winCount(data, "jeff") ? "Jordan" : "Jeff"}
			</Typography>
		</Box>
		<Box display={"flex"} justifyContent={"space-between"}>
			<Typography variant="h6" fontWeight={"bold"}>
				Jordan
			</Typography>
			<Typography variant="h6">{winCount(data, "jordan")}/23</Typography>
		</Box>
		<Box display={"flex"} justifyContent={"space-between"}>
			<Typography variant="h6" fontWeight={"bold"}>
				Jeff
			</Typography>
			<Typography variant="h6">{winCount(data, "jeff")}/23</Typography>
		</Box>
	</Box>
);

export default MobileResultsHeader;
