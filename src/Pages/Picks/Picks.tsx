import React from "react";
import Box from "@mui/material/Box";
import { Navigate, useParams } from "react-router-dom";
import { useGetPredictions } from "../../hooks/predictions/useGetPredictions";
import PicksForm from "./PicksForm";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";
import ErrorMessage from "../../Components/Error/ErrorMessage";
import urls from "../../api/endpoint";
import { useGetRequest } from "../../hooks/useGetRequest";
import { ICategory } from "../../types/Category";

const Picks = () => {
	const { name } = useParams();

	if (!name) {
		return <Navigate to="/" />;
	}

	const { data, isLoading } = useGetRequest<ICategory[]>(urls.predictions, {
		username: name,
	});

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
