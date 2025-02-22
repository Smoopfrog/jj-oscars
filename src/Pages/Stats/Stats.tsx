import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Countdown from "../../Components/Countdown/Countdown";
import { Navigate, useParams } from "react-router-dom";
import Button from "../../Components/Buttons/Button";
import dayjs from "dayjs";
import StatisticsCard from "../../Components/Statistics/StatisticsCard";
import TabPanel from "../../Components/Tabs/TabPanel";
import StatsTabs from "./Tabs/StatsTabs";

const Stats = () => {
	const { name } = useParams();

	if (!name) {
		return <Navigate to="/" />;
	}

	return (
		<Box display="flex" flexDirection="column" alignItems="center" gap={2}>
			<Countdown userName={name} />
			<Button>
				<Typography variant="h1" fontSize={28}>
					{dayjs().year()} Battle
				</Typography>
			</Button>
			<StatsTabs />
		</Box>
	);
};

export default Stats;
