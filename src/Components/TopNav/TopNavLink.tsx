import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

interface ITopNavLinkProps {
	to: string;
	text: string;
}

const TopNavLink: React.FC<ITopNavLinkProps> = ({ to, text }) => {
	return (
		<Link to={to} style={{ textDecoration: "none" }}>
			<Typography
				color="#696969"
				fontSize={20}
				sx={{
					"&:hover": { color: "rgb(199, 159, 39)" },
				}}
			>
				{text}
			</Typography>
		</Link>
	);
};

export default TopNavLink;
