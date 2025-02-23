import React, { useState } from "react";
import { ICategory } from "../../types/Category";
import { Form, Formik } from "formik";
import Button from "../../Components/Buttons/Button";
import Category from "../../Components/Category/Catergory";
import { postPredictions } from "../../hooks/predictions/postPredictions";
import { Box } from "@mui/material";
import ScrollToError from "../../Components/Error/ScrollToError";

interface IPicksForm {
	/** The name of the user */
	name: string;
	/** The categories to display */
	categories: ICategory[];
}

const PicksForm: React.FC<IPicksForm> = ({ name, categories }) => {
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
				<ScrollToError />
				<Box
					display="flex"
					flexDirection="column"
					gap={2}
					alignItems="center"
					mx={{ xs: 2, md: 0 }}
				>
					<Box display="flex" flexDirection="column" gap={3}>
						{categories.map((category: ICategory, i: number) => (
							<Category
								key={i}
								id={category.id}
								title={category.title}
								nominees={category.nominees}
							/>
						))}
						<Button type="submit" disabled={isLoading} sx={{ fontSize: 24 }}>
							{isLoading ? "Saving..." : "Submit"}
						</Button>
					</Box>
				</Box>
			</Form>
		</Formik>
	);
};

export default PicksForm;
