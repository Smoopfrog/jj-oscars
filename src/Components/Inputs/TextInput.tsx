import { TextField } from "@mui/material";
import React from "react";

interface ITextInputProps {
	label: string;
	value: string;
	placeholder?: string;
	type: "text" | "password";
	onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<ITextInputProps> = ({
	label,
	value,
	placeholder,
	type = "text",
	onChange,
}) => {
	return (
		<TextField
			variant="outlined"
			label={label}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default TextInput;
