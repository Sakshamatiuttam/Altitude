/** @format */

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaSearchSolid } from "react-icons/lia";
import { BiCommentDetail } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi2";
import logo from "./logos/alitbook.png";

const Navbar = () => {
	const [input, setInput] = useState("");

	return (
		<div className=" w-full mt-[-10px] flex items-center justify-between bg-gray-100 z-10 p-0 m-0">
			<div className="flex w-[350px] items-center">
				<img src={logo} alt="Logo" className="w-full h-auto " />
			</div>

			<div className="flex items-center justify-center w-full py-4">
				<div className="relative w-[60%] bg-green-400">
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder=""
						className="w-full px-4 py-2 border bg-gray-100 border-black focus:outline-none "
					/>
					<button type="submit" className="absolute right-0 top-0 mt-3 mr-3">
						<LiaSearchSolid size={"20px"} className="text-black" />
					</button>
				</div>
			</div>
			<div className="flex w-[350px] items-center justify-end space-x-6 ">
				<BiCommentDetail size={"20px"} className="cursor-pointer" />
				<GrNotification size={"20px"} className="cursor-pointer" />
				<HiOutlineUser size={"20px"} className="cursor-pointer" />
				<div className="bg-black p-5 flex  items-center text-white">
					<GiHamburgerMenu className="cursor-pointer" size={"20px"} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
