import React from "react";
import { Box, Typography } from "@mui/material";
import type { IMovieCategory } from "./Watchlist";

interface INominatedMovieProps {
	/** The movie title */
	movie: string;
	/** The categories the movie is nominated in */
	categories: IMovieCategory[];
}

const NominatedMovie = ({ movie, categories }: INominatedMovieProps) => {
	return (
		<Box mb={2}>
			<Box sx={{ display: "flex" }}>
				<Typography
					color="rgb(199, 159, 39)"
					fontSize={32}
					textTransform="uppercase"
				>
					{movie}
				</Typography>
			</Box>
			{categories.map((category) => (
				<Box key={category.category} sx={{ display: "flex", gap: 1 }}>
					<Typography fontSize={12} color="rgb(46, 46, 46)" fontWeight="bold">
						{category.category}
					</Typography>
					<Typography fontSize={12} color="rgb(46, 46, 46)">
						{category.nominee}
					</Typography>
				</Box>
			))}
		</Box>
	);
};

export default NominatedMovie;
