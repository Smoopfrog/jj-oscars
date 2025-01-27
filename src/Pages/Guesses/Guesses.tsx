import { CircularProgress, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useGetPredictions } from "../../hooks/predictions/useGetPredictions";
import GuessesForm from "./GuessesForm";
import GuessesSelector from "./GuessesSelector";

const Guesses = () => {
	const { name } = useParams();

	const { data: guesses, isLoading } = useGetPredictions(name as string);

	return (
		<Box
			sx={{
				top: 0,
				gap: 2,
				display: "flex",
				flexDirection: "column",
				alignItems: "start",
				minHeight: "100vh",
			}}
		>
			{!isLoading && guesses && name ? (
				<GuessesForm name={name} guesses={guesses} />
			) : (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						marginY: "auto",
					}}
				>
					<CircularProgress sx={{ color: "rgb(199, 159, 39)" }} />
				</Box>
			)}
		</Box>
	);
};

export default Guesses;
