import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

const TopNav = () => {
	const { name } = useParams();

	return (
		<Box
			width={"100%"}
			height={48}
			borderBottom={1}
			borderColor={"rgb(46, 46, 46, 0.2)"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			gap={3}
			mb={3}
		>
			<Link to={`/${name}/guesses`} style={{ textDecoration: "none" }}>
				<Typography
					color="#696969"
					sx={{
						"&:hover": { color: "rgb(199, 159, 39)" },
					}}
				>
					Picks
				</Typography>
			</Link>
			<Link to={`/${name}/watchlist`} style={{ textDecoration: "none" }}>
				<Typography
					color="#696969"
					sx={{
						"&:hover": { color: "rgb(199, 159, 39)" },
					}}
				>
					Watchlist
				</Typography>
			</Link>
		</Box>
	);
};

export default TopNav;
