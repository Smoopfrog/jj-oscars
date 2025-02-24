import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "../../Components/Buttons/Button";
import FuckYouModal from "./FuckYouModal";
import { konamiCodeArray } from "../../constants/homeConstants";
import { handleKeyPress } from "../../utils/homeUtils";
import axiosInstance from "../../api/axiosInstance";
import urls from "../../api/endpoint";

const UserSelection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		let index = 0;

		const keyPressHandler = (event: KeyboardEvent) => {
			index = handleKeyPress(event, index, konamiCodeArray, navigate);
		};

		window.addEventListener("keydown", keyPressHandler);
		return () => {
			window.removeEventListener("keydown", keyPressHandler);
		};
	}, [navigate]);

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
						axiosInstance
							.post(urls.sendText)
							.then((res) => console.log("Text response:", res.data))
							.catch((err) => console.error("Error sending text:", err));
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
			{/* <FuckYouModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/> */}
		</Box>
	);
};

export default UserSelection;
