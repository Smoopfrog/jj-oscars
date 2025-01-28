import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import oscarLogo from "../../Images/oscar-logo.png";
import { capitalize } from "../../utils/formatString";
const TopNav = () => {
	const { name } = useParams();

	return (
		<Box
			width={"100%"}
			position={"relative"}
			height={48}
			borderBottom={1}
			borderColor={"rgb(46, 46, 46, 0.2)"}
			display={"flex"}
			justifyContent={"space-between"}
			alignItems={"center"}
			gap={3}
			mb={3}
			px={2}
		>
			<Box display={"flex"} alignItems={"center"} gap={1}>
				<Link to="/" style={{ textDecoration: "none", marginTop: 1 }}>
					<Box width={36} height={"10%"}>
						<img
							src={oscarLogo}
							alt="home"
							style={{
								objectFit: "contain",
								maxWidth: "100%",
							}}
						/>
					</Box>
				</Link>
				<Typography color="#696969" fontSize={20}>
					{capitalize(name || "")}
				</Typography>
			</Box>
			<Box display={"flex"} alignItems={"center"} gap={2}>
				<Link to={`/${name}/guesses`} style={{ textDecoration: "none" }}>
					<Typography
						color="#696969"
						fontSize={20}
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
						fontSize={20}
						sx={{
							"&:hover": { color: "rgb(199, 159, 39)" },
						}}
					>
						Watchlist
					</Typography>
				</Link>
			</Box>
		</Box>
	);
};

export default TopNav;
