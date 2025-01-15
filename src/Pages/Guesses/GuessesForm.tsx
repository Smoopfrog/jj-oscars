import React, { useState } from "react";
import { ICategory } from "../../types/Category";
import { Form, Formik } from "formik";
import Question from "../../Components/Questions/Question";
import Button from "../../Components/Buttons/Button";
import axios from "axios";
import { nominations } from "../../MockData/Nominations";

interface IGuessesForm {
	name: string;
	guesses: Record<string, string>;
}

const GuessesForm = ({ name, guesses }: IGuessesForm) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSubmit = async (values: any) => {
		setIsLoading(true);
		await axios.post(`/api/${name}/data`, values).then((res) => {
			console.log(`Saved ${name} picks!`);
		});
		setIsLoading(false);
	};

	return (
		<Formik initialValues={guesses} onSubmit={onSubmit}>
			<Form>
				{nominations.map((category: ICategory, i: number) => (
					<Question
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
