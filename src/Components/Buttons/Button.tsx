import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
	return (
		<MuiButton variant="contained" onClick={onClick}>
			{text}
		</MuiButton>
	);
};

export default Button;
