import { CircularProgress, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useGetPredictions } from "../../hooks/predictions/useGetPredictions";
import GuessesForm from "./GuessesForm";
import GuessesSelector from "./GuessesSelector";

const Guesses = () => {
	const { name } = useParams();

	const { data: guesses, isLoading } = useGetPredictions(name as string);

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
					<>
						<GuessesSelector />
						<GuessesForm name={name} guesses={guesses} />
					</>
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
