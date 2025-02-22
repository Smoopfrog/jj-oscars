import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import oscarLogo from "../../Images/oscar-logo.png";
import { capitalize } from "../../utils/formatString";
import Countdown from "../Countdown/Countdown";
const TopNav = () => {
	const { name } = useParams();

	if (!name) {
		return <Navigate to="/" />;
	}

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
			px={3}
		>
			<Box display={"flex"} alignItems={"center"} gap={1} flex={1}>
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
					{capitalize(name)}
				</Typography>
			</Box>
			<Box flex={1} display={"flex"} justifyContent={"center"}>
				<Countdown userName={name} />
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"flex-end"}
				gap={2}
				flex={1}
			>
				<Link to={`/user/${name}/guesses`} style={{ textDecoration: "none" }}>
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
				<Link to={`/user/${name}/watchlist`} style={{ textDecoration: "none" }}>
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
