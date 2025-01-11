import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useParams } from "react-router-dom";
import Question from "../../Components/Questions/Question";
import Jordan from "../../Images/jordan.jpg";

const Guesses = () => {
	const { name } = useParams();

	return (
		<Box
			sx={{
				background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${Jordan})`,
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
				height: "100vh",
				overflowY: "auto",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
				}}
			>
				<Box
					sx={{
						top: 0,
						gap: 2,
						p: 15,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						width: "50%",
						height: "100%",
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
					<Question
						category="Best Picture"
						nominees={[
							"Gladiator",
							"The Avengers",
							"The Dark Knight",
							"Inception",
							"The Social Network",
						]}
					/>
					<Question
						category="Best Picture"
						nominees={[
							"Gladiator",
							"The Avengers",
							"The Dark Knight",
							"Inception",
							"The Social Network",
						]}
					/>{" "}
					<Question
						category="Best Picture"
						nominees={[
							"Gladiator",
							"The Avengers",
							"The Dark Knight",
							"Inception",
							"The Social Network",
						]}
					/>{" "}
					<Question
						category="Best Picture"
						nominees={[
							"Gladiator",
							"The Avengers",
							"The Dark Knight",
							"Inception",
							"The Social Network",
						]}
					/>{" "}
					<Question
						category="Best Picture"
						nominees={[
							"Gladiator",
							"The Avengers",
							"The Dark Knight",
							"Inception",
							"The Social Network",
						]}
					/>{" "}
					<Question
						category="Best Picture"
						nominees={[
							"Gladiator",
							"The Avengers",
							"The Dark Knight",
							"Inception",
							"The Social Network",
						]}
					/>
					<Question
						category="Best Picture"
						nominees={[
							"Gladiator",
							"The Avengers",
							"The Dark Knight",
							"Inception",
							"The Social Network",
						]}
					/>
					<Question
						category="Best Picture"
						nominees={[
							"Gladiator",
							"The Avengers",
							"The Dark Knight",
							"Inception",
							"The Social Network",
						]}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Guesses;
