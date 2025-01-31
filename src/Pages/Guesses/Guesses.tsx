import React from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useGetPredictions } from "../../hooks/predictions/useGetPredictions";
import GuessesForm from "./GuessesForm";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";

const Guesses = () => {
	const { name } = useParams();

	const { data: guesses, isLoading } = useGetPredictions(name as string);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			{isLoading && guesses && name ? (
				<GuessesForm name={name} guesses={guesses} />
			) : (
				<LoadingSpinner />
			)}
		</Box>
	);
};

export default Guesses;
