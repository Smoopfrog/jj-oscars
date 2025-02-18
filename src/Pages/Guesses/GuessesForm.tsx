import React, { useState } from "react";
import { ICategory } from "../../types/Category";
import { Form, Formik } from "formik";
import Button from "../../Components/Buttons/Button";
import Category from "../../Components/Category/Catergory";
import { postPredictions } from "../../hooks/predictions/postPredictions";
import { Box } from "@mui/material";
import GuessesSelector from "./GuessesSelector";

interface IGuessesForm {
	/** The name of the user */
	name: string;
	/** The categories to display */
	categories: ICategory[];
}

const GuessesForm = ({ name, categories }: IGuessesForm) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSubmit = async (values: any) => {
		setIsLoading(true);
		postPredictions(name, values);
		setIsLoading(false);
	};

	const initialValues = categories.reduce((acc: any, category: ICategory) => {
		acc[category.id] = category.prediction;
		return acc;
	}, {});

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			<Form>
				<Box
					sx={{
						display: "flex",
						gap: 2,
						position: "relative",
					}}
				>
					<Box sx={{ flex: 1, ml: "15vw" }}>
						{categories.map((category: ICategory, i: number) => (
							<Category
								key={i}
								id={category.id}
								title={category.title}
								nominees={category.nominees}
							/>
						))}
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: 2,
							flexDirection: "column",
							alignItems: "flex-end",
							position: "fixed",
							right: "15vw",
						}}
					>
						<GuessesSelector />
						<Button
							type="submit"
							disabled={isLoading}
							sx={{ width: "min-content" }}
						>
							{isLoading ? "Saving..." : "Submit"}
						</Button>
					</Box>
				</Box>
			</Form>
		</Formik>
	);
};

export default GuessesForm;
