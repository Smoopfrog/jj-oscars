import React from "react";
import TopNav from "../../Components/TopNav/TopNav";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const User = () => {
	return (
		<Box>
			<TopNav />
			<Outlet />
		</Box>
	);
};

export default User;
