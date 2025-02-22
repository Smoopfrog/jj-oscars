import { Box } from "@mui/material";
import React from "react";
import Countdown from "../../Components/Countdown/Countdown";
import { Navigate, useParams } from "react-router-dom";

const Stats = () => {
	const { name } = useParams();

	if (!name) {
		return <Navigate to="/" />;
	}

	return (
		<Box>
			<Countdown userName={name} />
		</Box>
	);
};

export default Stats;
