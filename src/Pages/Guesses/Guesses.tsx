import { CircularProgress, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GuessesForm from "./GuessesForm";

const Guesses = () => {
	const { name } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [guesses, setGuesses] = useState<any>([]);

	useEffect(() => {
		const fetchGuesses = async () => {
			setIsLoading(true);

			await axios.get(`/api/${name}/data`).then(({ data }) => {
				setGuesses(data);
				setIsLoading(false);
			});
		};

		fetchGuesses();
	}, [name]);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					top: 0,
					gap: 2,
					p: 15,
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					width: "50%",
					minHeight: "100vh",
				}}
			>
				<Typography
					variant="h2"
					textTransform="capitalize"
					color="rgb(199, 159, 39)"
					width="100%"
				>
					{name}'s Guesses
				</Typography>
				{!isLoading && guesses && name ? (
					<GuessesForm name={name} guesses={guesses} />
				) : (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							width: "100%",
							marginY: "auto",
						}}
					>
						<CircularProgress sx={{ color: "rgb(199, 159, 39)" }} />
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default Guesses;
