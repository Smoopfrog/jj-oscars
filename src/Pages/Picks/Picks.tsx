import React from "react";
import Box from "@mui/material/Box";
import { Navigate, useParams } from "react-router-dom";
import { useGetPredictions } from "../../hooks/predictions/useGetPredictions";
import PicksForm from "./PicksForm";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";
import ErrorMessage from "../../Components/Error/ErrorMessage";

const Picks = () => {
	const { name } = useParams();

	if (!name) {
		return <Navigate to="/" />;
	}

	const { data, isLoading } = useGetPredictions(name as string);

	return (
		<Box mt={3} mb={5}>
			{!isLoading ? (
				data ? (
					<PicksForm name={name} categories={data} />
				) : (
					<ErrorMessage />
				)
			) : (
				<LoadingSpinner />
			)}
		</Box>
	);
};

export default Picks;
