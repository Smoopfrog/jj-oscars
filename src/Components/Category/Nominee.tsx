import { Box, FormControlLabel, Radio, Typography } from "@mui/material";
import React from "react";
import { INominee } from "../../types/Nominee";

interface INomineeProps {
	nominee: INominee;
	/** When true and onClearClick provided, clicking clears the selection */
	isSelected?: boolean;
	onClearClick?: () => void;
}

const Nominee = ({ nominee, isSelected, onClearClick }: INomineeProps) => {
	const handleClick = () => {
		if (isSelected && onClearClick) {
			onClearClick();
		}
	};

	return (
		<FormControlLabel
			value={nominee.id}
			onClick={handleClick}
			control={
				<Radio
					sx={{
						color: "#E0E0E0",
						"&.Mui-checked": {
							color: "#E0E0E0",
						},
					}}
				/>
			}
			label={
				<Box>
					<Typography sx={{ fontSize: 16, color: "#E0E0E0" }}>
						{nominee.title}
					</Typography>
					<Typography sx={{ fontSize: 12, color: "#E0E0E0" }}>
						{nominee.subtitle}
					</Typography>
				</Box>
			}
		/>
	);
};

export default Nominee;
