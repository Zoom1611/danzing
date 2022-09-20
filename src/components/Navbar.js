import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { HiOutlineFolder } from "react-icons/hi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
			<div className="bg-[#000000] w-full max-w-[300px] max-h-[321px] h-full fixed z-10">
				<div className="h-full flex flex-col justify-evenly">
					<div className="text-[#FFFFFF] font-bold text-5xl px-5 text-left">
						<Link to={"/"}>
							<span className="text-[#FFF] hover:text-[#1ED760]">danzing</span>
						</Link>
					</div>
					<div className="px-5">
						<Link className="" to={"/"}>
							<div className="flex items-center group cursor-pointer mb-1">
								<HiOutlineHome className="text-[#B2B2B2] text-3xl group-hover:text-[#FFFFFF]" />
								<span className="text-[#B2B2B2] text-base font-bold p-2 group-hover:text-[#FFFFFF]">
									Home
								</span>
							</div>
						</Link>
						<Link className="" to={"/search"}>
							<div className="flex items-center group cursor-pointer mb-1">
								<HiSearch className="text-[#B2B2B2] text-3xl group-hover:text-[#FFFFFF]" />
								<span className="text-[#B2B2B2] text-base font-bold p-2 group-hover:text-[#FFFFFF]">
									Search
								</span>
							</div>
						</Link>
						<Link className="" to={"/library"}>
							<div className="flex items-center group cursor-pointer">
								<HiOutlineFolder className="text-[#B2B2B2] text-3xl group-hover:text-[#FFFFFF]" />
								<span className="text-[#B2B2B2] text-base font-bold p-2 group-hover:text-[#FFFFFF]">
									Library
								</span>
							</div>
						</Link>
					</div>
					<div className="px-5">
						<Link className="" to={"/createPlaylist"}>
							<div className="flex items-center group cursor-pointer mb-1">
								<MdOutlineCreateNewFolder className="text-[#B2B2B2] text-3xl group-hover:text-[#FFFFFF]" />
								<span className="text-[#B2B2B2] text-base font-bold p-2 group-hover:text-[#FFFFFF]">
									Create Playlist
								</span>
							</div>
						</Link>
						<Link className="" to={"/likedSongs"}>
							<div className="flex items-center group cursor-pointer">
								<FcLike className="text-3xl group-hover:text-[#ce1111]" />
								<span className="text-[#B2B2B2] text-base font-bold p-2 group-hover:text-[#FFFFFF]">
									Liked Songs
								</span>
							</div>
						</Link>
					</div>
				</div>
				<div className="bg-[#000000] w-full max-w-[300px] h-full fixed border-t ">
					<div className="text-[#B2B2B2] font-bold px-5 pt-5">
						List of Playlists
					</div>
				</div>
			</div>
	);
};

export default Navbar;
