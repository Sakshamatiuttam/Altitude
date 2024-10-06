/** @format */

import React from "react";
import plane from "./-.png";
import Nav from "./nav";

function App() {
	return (
		<div className="grid grid-cols-[200px_1fr_200px] h-screen">
			<Nav />
			{/* Left Sidebar */}
			<aside className="bg-gray-100 pt-16 border-r border-gray-300">
				<ul className=" flex flex-col gap-9 text-xl ml-8 font-semibold">
					<li className=" flex flex-row gap-4">
						<svg
							width="15"
							height="20"
							viewBox="0 0 15 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="mt-1">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M5.72595 1.625C6.14233 0.929561 6.91152 0.500824 7.74428 0.5L7.75595 0.5225C9.04461 0.5225 10.0893 1.52986 10.0893 2.7725V7.39625H12.4693C13.3313 7.39363 14.1245 7.84949 14.5323 8.5818C14.9401 9.31411 14.896 10.2036 14.4176 10.895L9.10928 18.6125C8.53733 19.4332 7.47673 19.7977 6.49542 19.5107C5.51411 19.2237 4.84211 18.3526 4.83928 17.3638V14.1575H2.34262C1.50734 14.1607 0.734003 13.7331 0.314927 13.0364C-0.104149 12.3396 -0.10503 11.48 0.312618 10.7825L5.72595 1.625ZM8.16433 2.34822C8.05239 2.2424 7.90101 2.18448 7.74429 2.1875C7.53067 2.1882 7.33607 2.30602 7.24262 2.49125L1.82928 11.6263C1.73026 11.8008 1.73419 12.0127 1.83963 12.1837C1.94506 12.3547 2.13632 12.4593 2.34262 12.4587H5.42262C6.06695 12.4587 6.58928 12.9624 6.58928 13.5837V17.3525C6.59239 17.5969 6.75878 17.8114 7.00102 17.8832C7.24326 17.9551 7.50592 17.8679 7.65095 17.6675L12.9826 9.93875C13.1042 9.76538 13.1159 9.54128 13.013 9.35703C12.9101 9.17278 12.7096 9.05883 12.4926 9.06125H9.50595C8.86162 9.06125 8.33928 8.55757 8.33928 7.93625V2.75C8.33932 2.59885 8.27626 2.45404 8.16433 2.34822Z"
								fill="black"
							/>
						</svg>
						Popular
					</li>
					<li className=" flex flex-row gap-4">
						<svg
							width="17"
							height="19"
							viewBox="0 0 17 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="mt-1">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M11.6003 12.1803H11.6731C14.0571 11.3256 15.9585 9.77444 17 7.83441V12.131C17.0097 14.885 15.0015 17.3797 11.8915 18.4774H11.8066C10.7783 18.831 9.6713 19.0088 8.55466 18.9997C7.47533 19.0021 6.40648 18.8278 5.41193 18.4872L5.09645 18.3788C1.9932 17.3244 -0.0195091 14.8531 0.000142622 12.1212V11.9438C0.0234243 10.5447 0.725451 9.20969 1.95373 8.22859L2.17214 8.06106C4.10296 6.52526 5.69536 4.73204 6.88016 2.75929L8.54252 0C8.54252 0 10.2656 1.97092 11.8673 3.94184C13.8206 6.2957 13.171 9.47872 10.3869 11.1948H10.2413C9.95227 11.4902 9.98365 11.915 10.3141 12.1803C10.4523 12.2751 10.6314 12.3212 10.8116 12.3084C11.0811 12.2992 11.3472 12.256 11.6003 12.1803ZM11.0664 17.1076H11.1514V17.0977C13.5775 16.2341 15.151 14.2922 15.1677 12.1409C14.3494 12.7258 13.4137 13.1924 12.4012 13.5205L12.2434 13.5698C11.7867 13.7142 11.3017 13.791 10.8116 13.7964C10.1474 13.8155 9.50268 13.6124 9.0279 13.2347C8.03657 12.439 7.94242 11.1646 8.80948 10.2783C8.91535 10.1709 9.03768 10.0748 9.17351 9.99256H9.25844C11.3045 8.75303 11.7859 6.42479 10.3505 4.7105C9.82875 4.0798 9.30698 3.44911 8.82162 2.8874L8.51827 3.39984C7.23403 5.502 5.51889 7.41146 3.44623 9.04652L3.22781 9.21405C2.3465 9.92041 1.84118 10.8792 1.82026 11.8846V12.0719C1.78739 14.2194 3.3617 16.1684 5.80024 16.9992L6.11572 17.1076C7.69762 17.653 9.48452 17.653 11.0664 17.1076Z"
								fill="black"
							/>
						</svg>
						Hot News
					</li>
					<li className=" flex flex-row gap-4">
						<svg
							width="24"
							height="12"
							viewBox="0 0 24 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="mt-1">
							<path
								d="M1.47292 10.432L0 9.01796L7.36562 1.94696L13.9948 8.31096L18.4146 4.06796L16.599 2.32596L23.5698 0.532959L21.7021 7.22496L19.8875 5.48296L13.9948 11.139L7.36562 4.77496L1.47292 10.432Z"
								fill="black"
							/>
						</svg>
						Event
					</li>
					<li className=" flex flex-row gap-4">
						<svg
							width="23"
							height="23"
							viewBox="0 0 23 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="mt-1">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M14.2187 6.88956C14.1274 6.87883 14.0352 6.87883 13.944 6.88956L8.97731 8.17518C8.58192 8.2732 8.2732 8.58192 8.17518 8.97731L6.92253 13.9879C6.83992 14.3214 6.91808 14.6744 7.13378 14.9419C7.34948 15.2093 7.67788 15.3605 8.02134 15.3504C8.1126 15.3612 8.20479 15.3612 8.29605 15.3504L13.3176 14.0648C13.713 13.9668 14.0217 13.6581 14.1198 13.2627L15.3724 8.2521C15.455 7.91857 15.3769 7.56559 15.1612 7.29812C14.9455 7.03065 14.6171 6.87949 14.2736 6.88956H14.2187ZM13.01 9.18609L12.2408 12.2847L9.14213 13.0539L9.91131 9.95526L13.01 9.18609Z"
								fill="black"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M13.4495 0H8.79051C3.93565 0 0 3.93565 0 8.79051V13.4495C0 18.3044 3.93565 22.24 8.79051 22.24H13.4495C18.3044 22.24 22.24 18.3044 22.24 13.4495V8.79051C22.24 3.93565 18.3044 0 13.4495 0ZM8.79051 20.5918C4.84844 20.5857 1.65427 17.3916 1.64822 13.4495V8.79051C1.65427 4.84844 4.84844 1.65427 8.79051 1.64822H13.4495C17.3916 1.65427 20.5857 4.84844 20.5918 8.79051V13.4495C20.5857 17.3916 17.3916 20.5857 13.4495 20.5918H8.79051Z"
								fill="black"
							/>
						</svg>
						Explore
					</li>
					<li>+ Create Group</li>
				</ul>
			</aside>
			<main className="p-4">
				{/* Navbar */}

				<nav className="bg-gray-800 flex justify-start items-center  text-white p-4 mb-6 w-full m-0">
					<ul className="flex justify-between space-x-14 text-xl">
						<li>
							<a href="#home" className="hover:bg-gray-700 p-2 rounded">
								For You
							</a>
						</li>
						<li>
							<a href="#about" className="hover:bg-gray-700 p-2 rounded">
								Following
							</a>
						</li>
						<li>
							<a href="#services" className="hover:bg-gray-700 p-2 rounded">
								Groups
							</a>
						</li>
						<li>
							<a href="#contact" className="hover:bg-gray-700 p-2 rounded">
								Classified
							</a>
						</li>
						<li>
							<a href="#contact" className="hover:bg-gray-700 p-2 rounded">
								Podcasts
							</a>
						</li>
					</ul>
				</nav>

				{/* Main Content Section */}
				<section className="flex flex-col  items-center justify-center h-screen px-4">
					<div className="h-32"></div>
					<div className="flex flex-row ">
						<div classNAme="text-center pl-8">
							<p className="font-semibold text-2xl"># Aviation</p>

							<h1 className="text-3xl  font-semibold">
								Purpose-Built to bring.......
							</h1>

							<div className="overflow-hidden">
								<h2
									id="mern"
									className="text-blue-500 text-lg md:text-4xl mt-4">
									MERN Stack Developer
								</h2>
							</div>
							<div className="mt-4 font-mono font-light text-md md:text-xl">
								<p>
									{" "}
									Passionate MERN Stack Developer skilled in building dynamic,
								</p>
								<p>high-performance web applications. You are welcomed to my</p>
								<p>repositry on github for projects overveiw</p>
							</div>
							<div className="flex justify-center md:justify-start gap-5 pt-4">
								<a href="https://github.com/coderX56">
									<svg
										width="21"
										height="18"
										viewBox="0 0 21 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10.1 17.8C9.6 17.8 9 17.6 8.6 17.2C2.1 11.5 2 11.4 2 11.3L1.9 11.2C0.699998 10 0 8.3 0 6.6V6.4C0.1 2.8 3 0 6.6 0C7.7 0 9.2 0.6 10.1 1.8C11 0.6 12.6 0 13.7 0C17.3 0 20.1 2.8 20.3 6.4V6.6C20.3 8.4 19.6 10 18.4 11.3L18.3 11.4C18.2 11.5 17.4 12.2 11.7 17.3C11.2 17.6 10.7 17.8 10.1 17.8ZM3.5 11C3.9 11.4 5.9 12.8 9.6 16C9.9 16.3 10.3 16.3 10.6 16C14.4 12.6 16.6 10.7 17.1 10.3L17.2 10.2C18.2 9.2 18.7 7.9 18.7 6.6V6.4C18.6 3.6 16.4 1.5 13.6 1.5C12.9 1.5 11.5 2 11 3.1C10.8 3.5 10.4 3.7 10 3.7C9.6 3.7 9.2 3.5 9 3.1C8.5 2.1 7.2 1.5 6.4 1.5C3.7 1.5 1.4 3.7 1.3 6.4V6.7C1.3 8 1.9 9.3 2.8 10.2L3.5 11Z"
											fill="black"
										/>
									</svg>
								</a>
								<a href="https://www.linkedin.com/in/aman-tiwari-81174419a/">
									<svg
										width="22"
										height="21"
										viewBox="0 0 22 21"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M5.24 0.00221906H15.74C17.1118 -0.0380807 18.4428 0.471915 19.4365 1.4186C20.4301 2.36529 21.0039 3.67004 21.03 5.04222V12.6322C20.9483 15.4531 18.6116 17.6827 15.79 17.6322H14.17C13.7628 17.6333 13.3775 17.8168 13.12 18.1322L11.59 20.0822C11.3337 20.3994 10.9478 20.5837 10.54 20.5837C10.1322 20.5837 9.7463 20.3994 9.49 20.0822L7.91 18.0922C7.6525 17.7768 7.2672 17.5933 6.86 17.5922H5.24C2.41843 17.6427 0.0817429 15.4131 0 12.5922V5.00222C0.0763705 2.17899 2.4163 -0.0537603 5.24 0.00221906ZM15.75 16.1322C17.7585 16.1827 19.4301 14.6004 19.49 12.5922V5.04222C19.4301 3.02999 17.7523 1.44617 15.74 1.50222H5.24C3.22766 1.44617 1.54989 3.02999 1.49 5.04222V12.5922C1.54989 14.6044 3.22766 16.1883 5.24 16.1322H6.86C7.7271 16.1324 8.5473 16.5259 9.09 17.2022L10.49 18.9822L11.89 17.2022C12.4327 16.5259 13.2529 16.1324 14.12 16.1322H15.75Z"
											fill="black"
										/>
										<path
											d="M6.74 6.96222C6.32579 6.96222 5.99 7.29801 5.99 7.71222V10.1122C5.99 10.5264 6.32579 10.8622 6.74 10.8622C7.15421 10.8622 7.49 10.5264 7.49 10.1122V7.71222C7.49 7.29801 7.15421 6.96222 6.74 6.96222Z"
											fill="black"
										/>
										<path
											d="M10.49 6.96222C10.0758 6.96222 9.74 7.29801 9.74 7.71222V10.1122C9.74 10.5264 10.0758 10.8622 10.49 10.8622C10.9042 10.8622 11.24 10.5264 11.24 10.1122V7.71222C11.24 7.29801 10.9042 6.96222 10.49 6.96222Z"
											fill="black"
										/>
										<path
											d="M14.24 6.96222C13.8258 6.96222 13.49 7.29801 13.49 7.71222V10.1122C13.49 10.5264 13.8258 10.8622 14.24 10.8622C14.6542 10.8622 14.99 10.5264 14.99 10.1122V7.71222C14.99 7.29801 14.6542 6.96222 14.24 6.96222Z"
											fill="black"
										/>
									</svg>
								</a>
							</div>
						</div>
						<div class="flex justify-center mt-10 md:mt-0 overflow-hidden">
							<img
								src={plane}
								className="rounded-full h-44 w-44 md:h-96 md:w-96"
								alt="Avatar"
							/>
						</div>
					</div>
				</section>
			</main>

			{/* Right Sidebar */}
			<aside className="bg-gray-100 p-4 border-l border-gray-300">
				<h3 className="text-lg font-semibold mb-4">Right Sidebar</h3>
				<ul>
					<li className="mb-2">Widget 1</li>
					<li className="mb-2">Widget 2</li>
					<li className="mb-2">Widget 3</li>
				</ul>
			</aside>
		</div>
	);
}

export default App;
