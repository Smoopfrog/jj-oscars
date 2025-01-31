import { Box, Typography } from "@mui/material";
import React from "react";
import OscarsLogo from "../../Images/OscarsLogo.png";
import UserSelection from "./UserSelection";

const Home = () => {
	return (
		<Box
			className="home-background"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box
				sx={{
					width: "40%",
					gap: 2,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<img
					src={OscarsLogo}
					alt="Oscars Logo"
					style={{ marginBottom: "20px" }}
				></img>
				<Typography
					variant="h2"
					color="white"
					textTransform="uppercase"
					fontWeight="bold"
					sx={{
						textAlign: "center",
						fontSize: "1.8rem",
						lineHeight: "1",
						mb: 0,
					}}
				>
					Oscar Battle 2024
				</Typography>
				<Typography
					variant="h2"
					color="white"
					fontWeight="medium"
					sx={{
						textAlign: "center",
						fontSize: "1.5rem",
						lineHeight: "1.5",
						mb: 1,
					}}
				>
					53 movies, 23 categories, and a year of bragging rights. May the more
					sophisticated and pretentious cinephile win.
				</Typography>
				<UserSelection />
			</Box>
		</Box>
	);
};

export default Home;
