import React from "react";
import TopNav from "../../Components/TopNav/TopNav";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import jordan from "../../Images/jordan.jpg";

const User = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			height="100vh"
			sx={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
		url(${jordan})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
		>
			<TopNav />
			<Box mt="16px">
				<Outlet />
			</Box>
		</Box>
	);
};

export default User;
