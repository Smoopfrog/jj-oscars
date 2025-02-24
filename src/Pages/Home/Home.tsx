import { Box, Typography } from "@mui/material";
import React from "react";
import OscarsLogo from "../../Images/OscarsLogo.png";
import UserSelection from "./UserSelection";
import jordan from "../../Images/jordan.jpg";

const Home = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			position="relative"
			height="100vh"
			sx={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
	url(${jordan})`,
				backgroundSize: { xs: "contain", sm: "cover" },
				backgroundRepeat: { xs: "repeat", sm: "no-repeat" },
				backgroundAttachment: "fixed",
			}}
		>
			<Box
				sx={{
					width: { xs: "90%", sm: "40%" },
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
					Oscar Battle 2025
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
					50 movies, 23 categories, and a year of bragging rights. May the more
					sophisticated, pretentious cinephile win.
				</Typography>
				<UserSelection />
			</Box>
		</Box>
	);
};

export default Home;
