import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useParams } from "react-router-dom";
import Question from "../../Components/Questions/Question";
import { Form, Formik } from "formik";
import Button from "../../Components/Buttons/Button";

const Guesses = () => {
	const { name } = useParams();

	const onSubmit = (values: any) => {
		console.log(values);
	};

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
				<Formik initialValues={{}} onSubmit={onSubmit}>
					<Form>
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
						<Button type="submit">Submit</Button>
					</Form>
				</Formik>
			</Box>
		</Box>
	);
};

export default Guesses;
