import React from "react";
import { Box } from "@mui/material";
import LoginForm from "./LoginForm";

const Login = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				mt: 10,
			}}
		>
			<LoginForm />
		</Box>
	);
};

export default Login;
