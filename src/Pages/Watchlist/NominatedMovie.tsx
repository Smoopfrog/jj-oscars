import React from "react";
import { Box, Typography } from "@mui/material";
import { INomination } from "../../types/api/Watchlist/Nomination";

interface INominatedMovieProps {
	/** The movie title */
	movie: string;
	/** The categories the movie is nominated in */
	categories: INomination[];
}

const NominatedMovie = ({ movie, categories }: INominatedMovieProps) => {
	return (
		<Box mb={1} display="flex" flexDirection="column" gap={{ xs: 0.5, md: 0 }}>
			<Typography
				color="rgb(199, 159, 39)"
				fontSize={32}
				textTransform="uppercase"
				lineHeight={1.2}
			>
				{movie}
			</Typography>
			{categories.map((category, i) => (
				<Box
					key={i}
					display="flex"
					flexDirection={{ xs: "column", md: "row" }}
					gap={{ xs: 0, md: 1 }}
				>
					<Typography fontSize={12} color="#E0E0E0" fontWeight="bold">
						{category.category}
					</Typography>
					<Typography fontSize={12} color="#E0E0E0">
						{category.nominee}
					</Typography>
				</Box>
			))}
		</Box>
	);
};

export default NominatedMovie;
