import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Cards/Card";
import TextInput from "../../Components/Inputs/TextInput";
import Button from "../../Components/Buttons/Button";

const LoginForm = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleLogin = () => {
		axios
			.post("api/data", {
				username,
				password,
			})
			.then((res) => {
				console.log(res);
				navigate("/home");
			});
	};

	return (
		<Card sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
			<TextInput
				label="Username"
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<TextInput
				label="Password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button onClick={handleLogin}>Click me</Button>
		</Card>
	);
};

export default LoginForm;
