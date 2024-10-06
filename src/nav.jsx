/** @format */

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaSearchSolid } from "react-icons/lia";
import { BiCommentDetail } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi2";
// import logo from "../logos/alitbook.png";

const Navbar = () => {
	const [input, setInput] = useState("");

	return (
		<div className="fixed top-0 left-0 w-full mt-[-10px] flex items-center justify-between bg-white z-10 p-0 m-0">
			<div className="flex items-center">
				{/* <img src={logo} alt="Logo" className="w-[100%] h-auto" /> */}
			</div>

			<div className="flex items-center justify-center w-full py-4">
				<div className="relative w-[70%]">
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Search..."
						className="w-full px-4 py-3 border border-black focus:outline-none "
					/>
					<button type="submit" className="absolute right-0 top-0 mt-3 mr-3">
						<LiaSearchSolid size={"25px"} className="text-black" />
					</button>
				</div>
			</div>
			<div className="flex items-center gap-5">
				<BiCommentDetail size={"28px"} />
				<GrNotification size={"28px"} />
				<HiOutlineUser size={"28px"} />
				<div className="bg-black p-6 flex justify-center items-center text-white">
					<GiHamburgerMenu className="cursor-pointer" size={"25px"} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
