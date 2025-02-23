import { Box } from "@mui/material";
import React from "react";
import Countdown from "../../Components/Countdown/Countdown";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import StatsTabs from "./Tabs/StatsTabs";
import Card from "../../Components/Cards/Card";
import jordan from "../../Images/jordan.jpg";

const Stats = () => {
	const { name } = useParams();
	const navigate = useNavigate();

	if (!name) {
		return <Navigate to="/" />;
	}

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height="calc(100vh - 48px)"
			sx={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
			url(${jordan})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
		>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
					alignItems: "center",
				}}
			>
				<Countdown name={name} />
				<StatsTabs name={name} />
			</Card>
		</Box>
	);
};

export default Stats;
