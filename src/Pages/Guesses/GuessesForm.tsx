import React, { useState } from "react";
import { ICategory } from "../../types/Category";
import { Form, Formik } from "formik";
import Button from "../../Components/Buttons/Button";
import Category from "../../Components/Category/Catergory";
import { Nominees } from "../../MockData/Nominees";
import { postPredictions } from "../../hooks/predictions/postPredictions";

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
				{Nominees.map((category: ICategory, i: number) => (
					<Category
						key={i}
						category={category.title}
						nominees={category.nominees}
					/>
				))}
				<Button type="submit" disabled={isLoading}>
					{isLoading ? "Saving..." : "Submit"}
				</Button>
			</Form>
		</Formik>
	);
};

export default GuessesForm;
