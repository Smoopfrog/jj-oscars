import { Box, FormControlLabel, Radio, Typography } from "@mui/material";
import React from "react";
import { INominee } from "../../types/Nominee";

interface INomineeProps {
	nominee: INominee;
}

const Nominee = ({ nominee }: INomineeProps) => {
	return (
		<FormControlLabel
			value={nominee.id}
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
