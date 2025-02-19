import React from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useGetPredictions } from "../../hooks/predictions/useGetPredictions";
import GuessesForm from "./GuessesForm";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";
import { Typography } from "@mui/material";
import ErrorMessage from "../../Components/Error/ErrorMessage";

const Guesses = () => {
	const { name } = useParams();

	if (!name) {
		return null;
	}

	const { data, isLoading } = useGetPredictions(name as string);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			{!isLoading ? (
				data ? (
					<GuessesForm name={name} categories={data} />
				) : (
					<ErrorMessage />
				)
			) : (
				<LoadingSpinner />
			)}
		</Box>
	);
};

export default Guesses;
