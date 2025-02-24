import React from "react";
import { IResult } from "../../../types/api/Result";
import { Box } from "@mui/material";
import ErrorMessage from "../../../Components/Error/ErrorMessage";
import MobileResultsCard from "./MobileResultsCard";
import MobileResultsHeader from "./MobileResultsHeader";

interface IMobileResultsProps {
	/** The data to display in the table */
	data: IResult[] | null;
}

const MobileResults: React.FC<IMobileResultsProps> = ({ data }) => (
	<Box height={"100%"} overflow={"auto"}>
		{data ? (
			<Box mx={3} display={"flex"} flexDirection={"column"} gap={2}>
				<MobileResultsHeader data={data} />
				{data.length > 0 ? (
					data.map((category) => (
						<MobileResultsCard key={category.id} category={category} />
					))
				) : (
					<ErrorMessage message="No data found" />
				)}
			</Box>
		) : (
			<ErrorMessage />
		)}
	</Box>
);

export default MobileResults;
