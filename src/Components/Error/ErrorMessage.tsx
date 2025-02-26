import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface IErrorMessageProps extends TypographyProps {
	message?: React.ReactNode;
}

const ErrorMessage = ({ message, ...props }: IErrorMessageProps) => {
	const defaultMessage = (
		<>
			Oops something went wrong!
			<br />
			Bummer...
		</>
	);

	return (
		<Typography textAlign="center" color="#E0E0E0" fontSize={20} {...props}>
			{message || defaultMessage}
		</Typography>
	);
};

export default ErrorMessage;
