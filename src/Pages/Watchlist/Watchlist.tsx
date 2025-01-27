import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import TopNav from "../../Components/TopNav/TopNav";
import { categories } from "../../Data/Nominees";
import NominatedMovie from "./NominatedMovie";
import { Formik } from "formik";

export interface IMovieCategory {
	category: string;
	nominee: string;
}

const Watchlist = () => {
	const movies: { [key: string]: IMovieCategory[] } = {};

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

	const handleSubmit = (values: any) => {
		console.log(values);
	};

	const handleCheckboxChange = (movie: string, event: any) => {
		handleSubmit({ [movie]: event.target.checked });
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
			<TopNav />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
					alignItems: "center",
				}}
			>
				<Formik initialValues={{}} onSubmit={handleSubmit}>
					<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
						{Object.entries(movies)
							.sort((a, b) => a[0].localeCompare(b[0]))
							.map(([movie, categories], i) => (
								<FormControlLabel
									key={i}
									control={<Checkbox color="default" />}
									value={movie}
									label={
										<NominatedMovie movie={movie} categories={categories} />
									}
									onChange={(e) => handleCheckboxChange(movie, e)}
									sx={{ alignItems: "flex-start" }}
								/>
							))}
					</Box>
				</Formik>
			</Box>
		</Box>
	);
};

export default Watchlist;
