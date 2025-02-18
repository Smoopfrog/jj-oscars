import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { categories } from "../../Data/Nominees";
import NominatedMovie from "./NominatedMovie";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import {
	useGetWatchlist,
	WatchlistData,
} from "../../hooks/watchlist/useGetWatchlist";
import { putWatchlist } from "../../api/service/watchlistService";
import WatchListStats from "./WatchListStats";
import LoadingSpinner from "../../Components/loading/LoadingSpinner";

export interface IMovieCategory {
	category: string;
	nominee: string;
}

const Watchlist = () => {
	const [watchedMoviesCount, setWatchedMoviesCount] = useState<number>(0);
	const { name } = useParams();

	const { data, isLoading } = useGetWatchlist(name as string);

	useEffect(() => {
		if (data) {
			setWatchedMoviesCount(data.filter((movie) => movie.viewed).length);
		}
	}, [data]);

	const handleSubmit = (values: any) => {
		console.log(values);
	};

	const handleCheckboxChange = (movie_id: number, event: any) => {
		// if the checkbox is checked, increment the watchedMoviesCount
		setWatchedMoviesCount((prev) => prev + (event.target.checked ? 1 : -1));
		putWatchlist(name as string, {
			movie_id: movie_id,
			viewed: event.target.checked,
		});
	};

	// Memoize initialValues and check if data exists
	const initialValues = useMemo(() => {
		if (data) {
			return data.reduce((acc: any, movie: WatchlistData) => {
				acc[movie.title] = movie.viewed; // Use the movie title as the key
				return acc;
			}, {});
		}
		return {}; // Return an empty object if data does not exist
	}, [data]);

	return (
		<Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
			{!isLoading && data ? (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 2,
						alignItems: "center",
						position: "relative",
					}}
				>
					<WatchListStats
						watchedMoviesCount={watchedMoviesCount}
						movies={data}
					/>
					<Formik initialValues={initialValues} onSubmit={handleSubmit}>
						{({ values, setFieldValue }) => (
							<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
								{data.map(({ id, title, nominations }, i) => (
									<FormControlLabel
										key={i}
										control={
											<Checkbox
												color="default"
												checked={!!values[title]}
												onChange={(e) => {
													setFieldValue(title, e.target.checked);
													handleCheckboxChange(id, e);
												}}
											/>
										}
										value={id}
										label={
											<NominatedMovie movie={title} categories={nominations} />
										}
										onChange={(e) => handleCheckboxChange(id, e)}
										sx={{ alignItems: "flex-start" }}
									/>
								))}
							</Box>
						)}
					</Formik>
				</Box>
			) : (
				<LoadingSpinner />
			)}
		</Box>
	);
};

export default Watchlist;
