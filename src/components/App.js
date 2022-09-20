import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Artists from "./Artists";
import Navbar from "./Navbar";
import CreatePlaylist from "./CreatePlaylist";
import LikedSongs from "./LikedSongs";
import Search from "./Search";

const App = () => {
	const CLIENT_ID = "a34366ba93fb40189ed3500b345a9292";
	const REDIRECT_URI = "http://localhost:3000";
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
	const RESPONSE_TYPE = "token";

	const [token, setToken] = useState("");

	useEffect(() => {
		const hash = window.location.hash;

		let token = localStorage.getItem("token");

		if (!token && hash) {
			token = hash
				.substring(1)
				.split("&")
				.find(elem => elem.startsWith("access_token"))
				.split("=")[1];

			window.location.hash = "";
		}
		localStorage.setItem("token", token);
		setToken(token);
	}, []);

	const logout = () => {
		setToken("");
		localStorage.removeItem("token");
	};

	return (
		<div className="flex">
			{!token ? (
				<button className="h-10 px-5 m-2 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800 text-white">
					<a
						href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
						style={{ textDecoration: "none", color: "white" }}
					>
						Login To Spotify
					</a>
				</button>
			) : (
				<BrowserRouter>
					<div className="fixed w-full h-[60px] flex items-center justify-end bg-transparent text-white px-[20px]">
						<button
							className="bg-[#1ED760] px-4 py-2 rounded-lg hover:bg-[#68D761]"
							onClick={logout}
						>
							Logout
						</button>
					</div>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/artists" element={<Artists />} />
						<Route path="/createPlaylist" element={<CreatePlaylist />} />
						<Route path="/likedSongs" element={<LikedSongs />} />
						<Route path="/search" element={<Search />} />
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
};

export default App;
