import React, { useState } from "react";
import axios from "axios";

const Artists = () => {
	const [searchKey, setSearchKey] = useState("");
	const token = localStorage.getItem("token");

	const searchArtists = async e => {
		e.preventDefault();
		const { data } = await axios.get("https://api.spotify.com/v1/search", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: {
				q: searchKey,
				type: "artist",
			},
		});

		console.log(data);
		setSearchKey("");
	};

	return (
		<div>
			<form onSubmit={searchArtists}>
				<input
					type="text"
					onChange={e => {
						setSearchKey(e.target.value);
					}}
				/>
				<button type="submit">Search For Artists</button>
			</form>
		</div>
	);
};

export default Artists;
