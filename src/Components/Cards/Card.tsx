import { Card as MuiCard, CardProps } from "@mui/material";
import React from "react";

interface ICardProps extends CardProps {
	/** The content of the card */
	children: React.ReactNode;
	/** The class name of the card */
	className?: string;
}

const Card: React.FC<ICardProps> = ({ children, className, sx }) => {
	return (
		<MuiCard className={className} sx={{ padding: 2, ...sx }}>
			{children}
		</MuiCard>
	);
};

export default Card;
