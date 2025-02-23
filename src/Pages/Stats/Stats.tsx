import React from "react";
import { Box } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import Countdown from "../../Components/Countdown/Countdown";
import StatsTabs from "./Tabs/StatsTabs";
import Card from "../../Components/Cards/Card";

const Stats = () => {
	const { name } = useParams();

	if (!name) {
		return <Navigate to="/" />;
	}

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height="calc(100vh - 64px)"
		>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
					alignItems: "center",
					transform: "translateY(-64px)",
				}}
			>
				<Countdown name={name} />
				<StatsTabs name={name} />
			</Card>
		</Box>
	);
};

export default Stats;
