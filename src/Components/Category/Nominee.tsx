import { Box, FormControlLabel, Radio, Typography } from "@mui/material";
import React from "react";
import { INominee } from "../../types/Nominee";

interface INomineeProps {
	nominee: INominee;
}

const Nominee = ({ nominee }: INomineeProps) => {
	return (
		<FormControlLabel
			value={nominee.title}
			control={
				<Radio
					sx={{
						color: "white",
						"&.Mui-checked": {
							color: "white",
						},
					}}
				/>
			}
			label={
				<Box>
					<Typography sx={{ fontSize: 16, color: "white" }}>
						{nominee.title}
					</Typography>
					<Typography sx={{ fontSize: 12, color: "white" }}>
						{nominee.subtitle}
					</Typography>
				</Box>
			}
		/>
	);
};

export default Nominee;
