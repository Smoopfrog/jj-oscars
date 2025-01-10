import axios from "axios";
import React from "react";

const Home = () => {
	axios.get("api/data").then((res) => {
		console.log(res);
	});
	return <div>Hello Person</div>;
};

export default Home;
