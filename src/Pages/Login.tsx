import React from "react";
import Button from "../Components/Buttons/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	return (
		<div>
			<Button text="Click me" onClick={() => navigate("/home")} />
		</div>
	);
};

export default Login;
