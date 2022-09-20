import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));
console.log(token);

export default axios.create({
	baseURL: "https://api.spotify.com/v1",
	headers: {
		Authorization: `Bearer ${token}`,
	},
});
