import React, { useState } from "react";
import { ICategory } from "../../types/Category";
import { Form, Formik } from "formik";
import Button from "../../Components/Buttons/Button";
import Category from "../../Components/Category/Catergory";
import { categories } from "../../Data/Nominees";
import { postPredictions } from "../../hooks/predictions/postPredictions";
import { Box } from "@mui/material";
import GuessesSelector from "./GuessesSelector";

interface IGuessesForm {
	name: string;
	guesses: Record<string, string>;
}

const GuessesForm = ({ name, guesses }: IGuessesForm) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSubmit = async (values: any) => {
		setIsLoading(true);
		postPredictions(name, values);
		setIsLoading(false);
	};

	return (
		<Formik initialValues={guesses} onSubmit={onSubmit}>
			<Form>
				<Box sx={{ display: "flex", gap: 2, position: "relative" }}>
					<Box>
						{categories.map((category: ICategory, i: number) => (
							<Category
								key={i}
								category={category.title}
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
							top: "10%",
							right: "10%",
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
