import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Navigate, useParams } from "react-router-dom";
import PicksForm from "./PicksForm";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";
import ErrorMessage from "../../Components/Error/ErrorMessage";
import urls from "../../api/endpoint";
import { useGetRequest } from "../../hooks/useGetRequest";
import { ICategory } from "../../types/Category";
import YearSelect from "../../Components/Select/YearSelect";
import dayjs from "dayjs";

const Picks = () => {
	const { name } = useParams();

	const [year, setYear] = useState<number>(dayjs().year());

	if (!name) {
		return <Navigate to="/" />;
	}

	const { data, isLoading } = useGetRequest<ICategory[]>(
		urls.predictions,
		{
			username: name,
			year: year,
		},
		[year]
	);

	return (
		<Box height="calc(100vh - 80px)">
			<YearSelect
				year={year}
				setYear={setYear}
				hide={year === dayjs().year()}
			/>
			{!isLoading ? (
				data ? (
					<PicksForm name={name} categories={data} year={year} />
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
