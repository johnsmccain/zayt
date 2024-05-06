import logo from "../assets/logo.svg";
import { FaArrowRight } from "react-icons/fa";
export const Navbar = () => {
	return (
		<nav className="bg-customPrimary flex text-slate-50 w-full justify-center h-20">
			<div className="container h-full flex px-3">
				<div className=" h-full flex align-middle w-[400px]">
					<img src={logo} alt="logo" className="h-full" />
					<div className="border-l-2	my-4 p-1 flex flex-col justify-center w-fit ">
						<div className="text-[20px] font-mdisplay">ZAYT FOUNDATION</div>
						<div className="text-[12px] font-rdisplay">
							For women and children
						</div>
					</div>
				</div>
				<div className="md:flex hidden w-full h-full  justify-between items-center ">
					<ul className="flex  ml-auto h-full gap-12 items-center ">
						<li className="font-sdisplay">
							<a href="work" className="">
								Our Work
							</a>
						</li>
						<li className="">
							<a href="about_us" className="">
								About Us
							</a>
						</li>
						<li className="join">
							<a href="" className="">
								Get Involved
							</a>
						</li>
						<li className="">
							<a href="/news" className="">
								News
							</a>
						</li>
						<li className="h-full flex items-center">
							<span className="rounded-full border h-fit py-3 px-6 flex items-center">
								<a href="contact" className=" h-fit mr-3">
									Contact Us
								</a>
								<FaArrowRight />
							</span>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
