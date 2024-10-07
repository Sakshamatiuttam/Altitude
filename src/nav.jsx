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
<<<<<<< HEAD
		<div className="fixed w-full p-0  flex items-center justify-between bg-white z-50  m-0">
			<div className="flex items-center">
				{/* <img src={logo} alt="Logo" className="w-[100%] h-auto" /> */}
			</div>

			<div className="flex items-center justify-center w-full py-3   ">
				<div className="relative w-[70%] ml-32">
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Search..."
						className="w-full px-4 ml-2 py-2 border  border-black focus:outline-none rounded-xl  "
					/>
					<button type="submit" className="absolute right-0 top-0 mt-2 mr-3 ">
						<LiaSearchSolid size={"25px"} className="text-black" />
					</button>
				</div>
			</div>
			<div className="flex items-center gap-5">
				<div className=" rounded-xl px-2 py-2 hover:bg-slate-300">
					<svg
						width="26"
						height="27"
						viewBox="0 0 26 27"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M6.05282 0.666626H19.9528C23.1192 0.782547 25.6011 3.60876 25.5028 6.98663V15.68C25.5499 17.3113 24.9854 18.8954 23.9344 20.0816C22.8834 21.2678 21.4324 21.9582 19.9028 22H8.00282C7.17931 22.0181 6.39835 22.3937 5.84032 23.04L2.87782 26.4133C2.62683 26.7053 2.27416 26.8741 1.90282 26.88C1.5193 26.8695 1.15559 26.696 0.892648 26.398C0.629707 26.1 0.489353 25.7023 0.502821 25.2933V6.98663C0.404531 3.60876 2.88641 0.782547 6.05282 0.666626ZM19.9528 20C22.084 19.8849 23.7269 17.9537 23.6278 15.68V6.98663C23.7269 4.71292 22.084 2.78165 19.9528 2.66663H6.05282C3.92164 2.78165 2.27872 4.71292 2.37782 6.98663V24.0533L4.41532 21.68C5.3471 20.6227 6.64252 20.0161 8.00282 20H19.9528Z"
							fill="black"
						/>
						<path
							d="M8.31532 9.66663H14.5653C15.0831 9.66663 15.5028 9.21891 15.5028 8.66663C15.5028 8.11434 15.0831 7.66663 14.5653 7.66663H8.31532C7.79755 7.66663 7.37782 8.11434 7.37782 8.66663C7.37782 9.21891 7.79755 9.66663 8.31532 9.66663Z"
							fill="black"
						/>
						<path
							d="M17.6903 13H8.31532C7.79755 13 7.37782 13.4477 7.37782 14C7.37782 14.5522 7.79755 15 8.31532 15H17.6903C18.2081 15 18.6278 14.5522 18.6278 14C18.6278 13.4477 18.2081 13 17.6903 13Z"
							fill="black"
						/>
					</svg>
				</div>
				<div className=" rounded-xl px-2 py-2 hover:bg-slate-300">
					<svg
						width="22"
						height="23"
						viewBox="0 0 22 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M20.7449 16.06C20.2451 15.6167 19.9573 14.9688 19.9574 14.2867V8.66337C19.9574 4.05504 15.9299 0.333374 10.9574 0.333374C5.98489 0.333374 1.95739 4.05504 1.95739 8.66337V14.2867C1.95743 14.9688 1.6697 15.6167 1.16989 16.06C-0.528861 17.635 0.674889 20.3184 3.08239 20.3184H7.35739C7.90283 21.8938 9.34325 22.9446 10.9574 22.9446C12.5715 22.9446 14.0119 21.8938 14.5574 20.3184H18.8324C21.2399 20.3184 22.4436 17.635 20.7449 16.06ZM10.9574 21.1934C10.2878 21.1908 9.65679 20.8679 9.24739 20.3184H12.6224C12.226 20.8592 11.6124 21.1817 10.9574 21.1934ZM18.8436 18.5684C19.2526 18.6068 19.6421 18.3793 19.8224 17.9967C19.91 17.7662 19.8302 17.5036 19.6311 17.3667C18.7835 16.5826 18.2935 15.4646 18.2811 14.2867V8.66337C18.2811 5.03504 14.9961 2.08337 10.9686 2.08337C6.94114 2.08337 3.65614 5.03504 3.65614 8.66337V14.2867C3.6438 15.4646 3.15376 16.5826 2.30614 17.3667C2.10287 17.5001 2.01823 17.7635 2.10364 17.9967C2.28397 18.3793 2.67338 18.6068 3.08239 18.5684H18.8436Z"
							fill="black"
						/>
					</svg>
				</div>
				<div className=" rounded-xl px-2 py-2 hover:bg-slate-300">
					{" "}
					<svg
						width="21"
						height="21"
						viewBox="0 0 21 21"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M20.2909 15.4062L20.6009 16.5937C20.8947 17.6204 20.6046 18.6992 19.81 19.5355C19.0153 20.3719 17.7991 20.8783 16.4934 20.9166H4.50677C3.20112 20.8783 1.98488 20.3719 1.19022 19.5355C0.395555 18.6992 0.1055 17.6204 0.399268 16.5937L0.709268 15.4062C1.06581 13.7987 2.77932 12.6173 4.80385 12.5833H16.1964C18.2209 12.6173 19.9344 13.7987 20.2909 15.4062ZM16.4934 19.3437C17.1493 19.3376 17.7666 19.0925 18.1726 18.677V18.6875C18.6708 18.1835 18.8649 17.5268 18.7022 16.8958L18.3922 15.7083C18.2202 14.8283 17.3003 14.1693 16.1964 14.1354H4.80386C3.69995 14.1693 2.78002 14.8283 2.60802 15.7083L2.29802 16.8958C2.13935 17.5235 2.33324 18.1756 2.82761 18.677C3.23362 19.0925 3.85088 19.3376 4.50677 19.3437H16.4934Z"
							fill="black"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M11.1459 10.4999H9.85425C7.00078 10.4999 4.68758 8.63445 4.68758 6.33327V3.58327C4.68414 2.65416 5.14028 1.76231 5.95494 1.10533C6.76959 0.448347 7.87549 0.08049 9.02758 0.0832676H11.9726C13.1247 0.08049 14.2306 0.448347 15.0452 1.10533C15.8599 1.76231 16.316 2.65416 16.3126 3.58327V6.33327C16.3126 8.63445 13.9994 10.4999 11.1459 10.4999ZM9.02758 1.64577C7.70072 1.64577 6.62508 2.51322 6.62508 3.58327V6.33327C6.62508 7.77151 8.07083 8.93743 9.85425 8.93743H11.1459C12.9293 8.93743 14.3751 7.77151 14.3751 6.33327V3.58327C14.3751 3.06941 14.122 2.5766 13.6714 2.21325C13.2208 1.8499 12.6098 1.64577 11.9726 1.64577H9.02758Z"
							fill="black"
						/>
					</svg>
				</div>

				<div className="bg-slate-500 hover:bg-slate-700 px-2 py-2 mr-3 flex justify-center items-center text-white">
					<GiHamburgerMenu className="cursor-pointer" size={"25px"} />
				</div>
			</div>
		</div>
	);
=======
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
>>>>>>> e184023511a16825da14cd384a637c6f5014a859
};

export default Navbar;
