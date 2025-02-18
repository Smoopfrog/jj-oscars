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
						color: "rgb(46, 46, 46, 0.8)",
						"&.Mui-checked": {
							color: "rgb(46, 46, 46, 0.8)",
						},
					}}
				/>
			}
			label={
				<Box>
					<Typography sx={{ fontSize: 16, color: "rgb(46, 46, 46)" }}>
						{nominee.title}
					</Typography>
					<Typography sx={{ fontSize: 12, color: "rgb(46, 46, 46)" }}>
						{nominee.subtitle}
					</Typography>
				</Box>
			}
		/>
	);
};

export default Nominee;
