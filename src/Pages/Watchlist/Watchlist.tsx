import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import TopNav from "../../Components/TopNav/TopNav";
import { categories } from "../../Data/Nominees";
import NominatedMovie from "./NominatedMovie";

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
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					{Object.entries(movies)
						.sort((a, b) => a[0].localeCompare(b[0]))
						.map(([movie, categories]) => (
							<FormControlLabel
								control={<Checkbox color="default" />}
								label={
									<NominatedMovie
										key={movie}
										movie={movie}
										categories={categories}
									/>
								}
								sx={{ alignItems: "flex-start" }}
							/>
						))}
				</Box>
			</Box>
		</Box>
	);
};

export default Watchlist;
