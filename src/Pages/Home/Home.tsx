import { Box, Typography } from "@mui/material";
import React from "react";
import Jordan from "../../Images/jordan.jpg";
import OscarsLogo from "../../Images/OscarsLogo.png";
import UserSelection from "./UserSelection";

const Home = () => {
	return (
		<Box
			sx={{
				background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${Jordan})`,
				backgroundSize: "cover",
				height: "100vh",
			}}
		>
			<Box
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
						mt: 30,
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
						fontWeight="medium"
						sx={{
							textAlign: "center",
							fontSize: "1.5rem",
							lineHeight: "1.5",
							mb: 1,
						}}
					>
						Welcome to the Oscar Battle 2024
						<br />
						where winners become losers and losers become winners
					</Typography>
					<UserSelection />
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
