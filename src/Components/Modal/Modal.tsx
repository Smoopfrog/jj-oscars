import React from "react";
import { Modal as MuiModal } from "@mui/material";
import Card from "../Cards/Card";

interface IModalProps {
	/** The content of the modal */
	children: React.ReactNode;
	/** Whether the modal is open */
	isOpen: boolean;
	/** The function to call when the modal is closed */
	onClose: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, onClose }) => (
	<MuiModal open={isOpen} onClose={onClose}>
		<Card
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
			}}
		>
			{children}
		</Card>
	</MuiModal>
);

export default Modal;
