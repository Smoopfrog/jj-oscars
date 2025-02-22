import React from "react";
import { TabProps } from "@mui/material";
import { Tab as MuiTab } from "@mui/material";

interface ITabProps {
	label: React.ReactNode;
}

const Tab: React.FC<ITabProps> = ({ label }) => {
	return (
		<MuiTab
			label={label}
			sx={{
				textTransform: "none",
				color: "black",
				"&.Mui-selected": {
					color: "rgb(199, 159, 39)",
				},
				"&:hover": {
					color: "rgb(199, 159, 39, 0.5)",
				},
			}}
		/>
	);
};

export default Tab;
