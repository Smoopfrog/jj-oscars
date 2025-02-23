import { Checkbox } from "@mui/material";
import { Box, FormControlLabel } from "@mui/material";
import { Formik } from "formik";
import React, { useMemo } from "react";
import { IWatchlist } from "../../types/api/Watchlist/WatchList";
import NominatedMovie from "./NominatedMovie";
import { putWatchlist } from "../../api/service/watchlistService";

interface IWatchlistForm {
	/** User watchlist data */
	data: IWatchlist[];
	/** User name */
	name: string;
	/** Set watched movies count */
	setWatchedMoviesCount: (count: any) => void;
}

const WatchlistForm: React.FC<IWatchlistForm> = ({
	data,
	name,
	setWatchedMoviesCount,
}) => {
	// Memoize initialValues and check if data exists
	const initialValues = useMemo(() => {
		if (data) {
			return data.reduce((acc: any, movie: IWatchlist) => {
				acc[movie.title] = movie.viewed;
				return acc;
			}, {});
		}

		return {};
	}, [data]);

	const handleCheckboxChange = (movie_id: number, event: any) => {
		// if the checkbox is checked, increment the watchedMoviesCount
		setWatchedMoviesCount((prev: number) =>
			event.target.checked ? prev + 1 : prev - 1
		);
		putWatchlist({
			username: name,
			movie_id: movie_id,
			viewed: event.target.checked,
		});
	};

	return (
		<Formik initialValues={initialValues} onSubmit={() => {}}>
			{({ values, setFieldValue }) => (
				<Box
					display="flex"
					flexDirection="column"
					gap={2}
					maxWidth={{ xs: "100%", lg: "50%" }}
				>
					{data.map(({ id, title, nominations }, i) => (
						<FormControlLabel
							key={i}
							control={
								<Checkbox
									color="default"
									checked={!!values[title]}
									sx={{
										pointerEvents: "auto",
										py: 0.5,
										color: "#E0E0E0",
									}}
									onChange={(e) => {
										setFieldValue(title, e.target.checked);
										handleCheckboxChange(id, e);
									}}
								/>
							}
							value={id}
							label={<NominatedMovie movie={title} categories={nominations} />}
							sx={{
								alignItems: "flex-start",
								pointerEvents: "none",
							}}
						/>
					))}
				</Box>
			)}
		</Formik>
	);
};

export default WatchlistForm;
