import React, { useEffect } from "react";
import { useFormikContext } from "formik";

const ScrollToError = () => {
	const formik = useFormikContext();
	const submitting = formik?.isSubmitting;

	useEffect(() => {
		const el = document.querySelector(".error");
		el?.scrollIntoView();
	}, [submitting]);

	return null;
};

export default ScrollToError;
