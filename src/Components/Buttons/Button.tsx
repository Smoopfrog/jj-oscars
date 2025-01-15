import React from "react";
import { ButtonProps, Button as MuiButton } from "@mui/material";

interface IButtonProps extends ButtonProps {
	/** The text or React node to display in the button */
	children: string | React.ReactNode;
	/** The function to call when the button is clicked */
	onClick?: () => void;
}

/**
 * A generic button component with a custom style.
 * @param {IButtonProps} props - The props for the button component.
 * @returns {JSX.Element} - The button component.
 */
const Button: React.FC<IButtonProps> = ({
	children,
	onClick,
	sx,
	...buttonProps
}) => {
	return (
		<MuiButton
			variant="contained"
			color="primary"
			onClick={onClick}
			sx={{
				borderRadius: "2px",
				background: "#c79f27",
				color: "#ffffff",
				...sx,
			}}
			{...buttonProps}
		>
			{children}
		</MuiButton>
	);
};

export default Button;
