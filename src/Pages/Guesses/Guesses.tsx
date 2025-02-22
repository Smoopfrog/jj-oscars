import React from "react";
import Box from "@mui/material/Box";
import { Navigate, useParams } from "react-router-dom";
import { useGetPredictions } from "../../hooks/predictions/useGetPredictions";
import GuessesForm from "./GuessesForm";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";
import { Typography } from "@mui/material";
import ErrorMessage from "../../Components/Error/ErrorMessage";

const Guesses = () => {
	const { name } = useParams();

	if (!name) {
		return <Navigate to="/" />;
	}

	const { data, isLoading } = useGetPredictions(name as string);

	return (
		<Box mb={5}>
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
