import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axiosInstance from "../../api/axiosInstance";
import Modal from "../../Components/Modal/Modal";
import Button from "../../Components/Buttons/Button";

interface IFuckYouModalProps {
	/** Whether the modal is open */
	isOpen: boolean;
	/** The function to call when the modal is closed */
	onClose: () => void;
}

const FuckYouModal: React.FC<IFuckYouModalProps> = ({ isOpen, onClose }) => {
	useEffect(() => {
		if (isOpen) {
			axiosInstance
				.post("send-text")
				.then((res) => console.log("Text response:", res.data))
				.catch((err) => console.error("Error sending text:", err));
		}
	}, [isOpen]);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					You're such a scumbag.
				</Typography>
				<Button onClick={onClose}>Close</Button>
			</Box>
		</Modal>
	);
};

export default FuckYouModal;
