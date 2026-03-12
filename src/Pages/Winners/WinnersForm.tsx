import React, { useState } from "react";
import { ICategory } from "../../types/Category";
import { Form, Formik } from "formik";
import Button from "../../Components/Buttons/Button";
import Category from "../../Components/Category/Catergory";
import { Box } from "@mui/material";
import urls from "../../api/endpoint";
import axiosInstance from "../../api/axiosInstance";

interface IWinnersForm {
	/** The categories to display */
	categories: ICategory[];
	/** The year to display */
	year: number;
}

const WinnersForm: React.FC<IWinnersForm> = ({ categories, year }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSubmit = async (values: Record<string, number | null>) => {
		setIsLoading(true);
		try {
			const res = await axiosInstance.put(urls.winnersUpdate, {
				year,
				winners: values,
			});

			if (res.status === 200) {
				alert("Winners saved successfully!");
			} else {
				alert("Something went wrong. Please try again.");
			}
		} catch {
			alert("Something went wrong. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	const initialValues = categories.reduce((acc: Record<string, number | null>, category: ICategory) => {
		acc[category.id] = category.prediction ?? null;
		return acc;
	}, {});

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			<Form>
				<Box
					display="flex"
					flexDirection="column"
					gap={2}
					alignItems="center"
					mx={{ xs: 2, md: 0 }}
					maxHeight="calc(100vh - 180px)"
					overflow="auto"
				>
					<Box display="flex" flexDirection="column" gap={3}>
						{categories.map((category: ICategory, i: number) => (
							<Category
								key={i}
								id={category.id}
								title={category.title}
								nominees={category.nominees}
								required={false}
							/>
						))}
						<Button type="submit" disabled={isLoading} sx={{ fontSize: 24 }}>
							{isLoading ? "Saving..." : "Save Winners"}
						</Button>
					</Box>
				</Box>
			</Form>
		</Formik>
	);
};

export default WinnersForm;
