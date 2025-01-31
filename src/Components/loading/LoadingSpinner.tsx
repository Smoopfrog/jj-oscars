import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

const LoadingSpinner = () => (
	<Box
		sx={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			transform: "translateY(calc(-36px))",
			height: "calc(100vh - 72px)",
		}}
	>
		<CircularProgress sx={{ color: "rgb(199, 159, 39)" }} />
	</Box>
);

export default LoadingSpinner;
