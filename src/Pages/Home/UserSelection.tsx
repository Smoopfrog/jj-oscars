import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "../../Components/Buttons/Button";
import { useNavigate } from "react-router-dom";

const UserSelection = () => {
	const navigate = useNavigate();

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				gap: 1,
				width: "100%",
			}}
		>
			<Typography
				variant="h2"
				color="white"
				fontSize={"large"}
				textAlign="center"
				textTransform="uppercase"
				sx={{ mb: 1 }}
			>
				Please select yourself and don't lie.
			</Typography>
			<Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
				<Button
					sx={{ width: "30%" }}
					onClick={() => {
						navigate("/user/jordan");
					}}
					children="Jordan"
				/>
				<Button
					sx={{
						width: "30%",
					}}
					onClick={() => {
						navigate("/user/jeff");
					}}
					children="Jeff"
				/>
			</Box>
		</Box>
	);
};

export default UserSelection;
