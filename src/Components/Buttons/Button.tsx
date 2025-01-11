import React from "react";
import { ButtonProps, Button as MuiButton } from "@mui/material";

interface IButtonProps extends ButtonProps {
	text: string;
	onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ text, onClick, sx }) => {
	return (
		<MuiButton
			variant="contained"
			color="primary"
			onClick={onClick}
			sx={{ borderRadius: "2px", ...sx }}
		>
			{text}
		</MuiButton>
	);
};

export default Button;
