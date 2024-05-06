import {
	FaFacebookF,
	FaArrowRight,
	FaLinkedin,
	FaYoutube,
	FaTwitter,
} from "react-icons/fa";
import P1 from "../assets/Images/Frame 427319328.jpg";
const Hero = () => {
	return (
		<div className="flex justify-center">
			<div className="container pt-28 px-3">
				<h1 className="md:text-8xl text-4xl text-customPrimary font-mdisplay mb-11">
					Empowering And Nurturing The Future.
				</h1>
				<p className="text-xl text-customPrimary md:w-[700px] mb-11">
					By fostering a culture that Champion the potential of individauls and
					embraces the diversity of family compositions.
				</p>
				<div className="mb-20 md:flex justify-between text-white">
					<div className="mb-3">
						<button className="flex items-center  bg-customSecondary rounded-md py-2 px-7">
							Contact Us <FaArrowRight className="ml-3" />
						</button>
					</div>
					<div className="flex gap-3">
						<a
							href=""
							className="bg-customPrimary flex rounded-full h-8 w-8 items-center justify-center">
							{" "}
							<FaFacebookF />
						</a>
						<a
							href=""
							className="bg-customPrimary flex rounded-full h-8 w-8 items-center justify-center">
							<FaTwitter />
						</a>
						<a
							href=""
							className="bg-customPrimary flex rounded-full h-8 w-8 items-center justify-center">
							<FaLinkedin />
						</a>
						<a
							href=""
							className="bg-customPrimary flex rounded-full h-8 w-8 items-center justify-center">
							<FaYoutube />
						</a>
					</div>
				</div>
				<img src={P1} alt="Children" className="w-full" />
			</div>
		</div>
	);
};

export default Hero;
