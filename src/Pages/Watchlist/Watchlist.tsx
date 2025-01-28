import {
	Box,
	Checkbox,
	CircularProgress,
	FormControlLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { categories } from "../../Data/Nominees";
import NominatedMovie from "./NominatedMovie";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { useGetWatchlist } from "../../hooks/watchlist/useGetWatchlist";
import { putWatchlist } from "../../api/service/watchlistService";
import WatchListStats from "./WatchListStats";

export interface IMovieCategory {
	category: string;
	nominee: string;
}

const Watchlist = () => {
	const movies: { [key: string]: IMovieCategory[] } = {};
	const [watchedMoviesCount, setWatchedMoviesCount] = useState<number>(0);
	const { name } = useParams();

	const { data, isLoading } = useGetWatchlist(name as string);

	categories.forEach((category) => {
		category.nominees.forEach((nominee) => {
			if (movies[nominee.movie]) {
				movies[nominee.movie].push({
					category: category.title,
					nominee: nominee.title || nominee.subtitle || "",
				});
			} else {
				movies[nominee.movie] = [
					{
						category: category.title,
						nominee: nominee.title || nominee.subtitle || "",
					},
				];
			}
		});
	});

	useEffect(() => {
		if (data) {
			setWatchedMoviesCount(
				Object.keys(data).filter((key) => data[key]).length
			);
		}
	}, [data]);

	const handleSubmit = (values: any) => {
		console.log(values);
	};

	const handleCheckboxChange = (movie: string, event: any) => {
		// if the checkbox is checked, increment the watchedMoviesCount
		setWatchedMoviesCount((prev) => prev + (event.target.checked ? 1 : -1));
		putWatchlist(name as string, { [movie]: event.target.checked });
	};

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
						movies={movies}
					/>
					<Formik initialValues={data} onSubmit={handleSubmit}>
						{({ values, setFieldValue }) => (
							<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
								{Object.entries(movies)
									.sort((a, b) => a[0].localeCompare(b[0]))
									.map(([movie, categories], i) => (
										<FormControlLabel
											key={i}
											control={
												<Checkbox
													color="default"
													checked={!!values[movie]}
													onChange={(e) => {
														setFieldValue(movie, e.target.checked);
														handleCheckboxChange(movie, e);
													}}
												/>
											}
											value={movie}
											label={
												<NominatedMovie movie={movie} categories={categories} />
											}
											onChange={(e) => handleCheckboxChange(movie, e)}
											sx={{ alignItems: "flex-start" }}
										/>
									))}
							</Box>
						)}
					</Formik>
				</Box>
			) : (
				<CircularProgress sx={{ color: "rgb(199, 159, 39)" }} />
			)}
		</Box>
	);
};

export default Watchlist;
