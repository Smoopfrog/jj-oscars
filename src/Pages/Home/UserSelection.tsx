import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "../../Components/Buttons/Button";
import FuckYouModal from "./FuckYouModal";

const UserSelection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();

	// Konami code sequence
	const konamiCode =
		"ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a";
	const konamiCodeArray = konamiCode.split(",");
	useEffect(() => {
		let index = 0;

		const handleKeyPress = (event: KeyboardEvent) => {
			if (event.key === konamiCodeArray[index]) {
				index++;
				if (index === konamiCodeArray.length) {
					navigate("/user/jeff"); // Navigate to Jeff's page
					index = 0; // Reset index
				}
			} else {
				index = 0; // Reset index if the sequence is broken
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => {
			window.removeEventListener("keydown", handleKeyPress);
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
						navigate("/user/jordan");
					}}
					children="Jordan"
				/>
				<Button
					sx={{
						width: "30%",
					}}
					onClick={() => {
						setIsModalOpen(true);
					}}
					children="Jeff"
				/>
			</Box>
			<FuckYouModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</Box>
	);
};

export default UserSelection;
