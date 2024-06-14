import board from "../assets/Images/ab-1-2.svgboard.svg";
import home from "../assets/Images/ab-1-1.svg.svg";

const iconWrapper =
	"bg-slate-50 h-12 w-12 rounded-full flex items-center justify-center";
const cardWrapper = "flex items-center justify-center gap-2 m-2";
const h2Style = "text-customSecondary text-3xl font-bold";
const AboutUs = () => {
	return (
		<div className="bg-customPrimary text-white flex justify-center pt-36 px-1">
			<div className="container flex  flex-col md:grid mb-32">
				<div className="mb-8 ">
					<h1 className="font-sdisplay text-5xl">- About Us</h1>
				</div>
				<div className="md:ml-80">
					<p className="border-b-2 pb-6 mb-14 text-2xl">
						ZAYT FOUNDATION is a dynamic non-profit, non-governmental
						organization committed to fostering strong, empowered families. We
						have a resolute focus on women's empowerment, children's potential,
						holistic family well-being, and health interventions. Our mission is
						centered on "Creating Stronger Communities Through Transformative
						Empowerment, Inclusive Care, and Health." Our vision, succinctly
						encapsulated in the phrase "Empowering Women, Nurturing Futures for
						All," envisions a future where families flourish, women thrive,
						every child's potential is nurtured, and health is a cornerstone of
						well-being. We believe in cultivating an inclusive society where
						support, opportunities, and health interventions are extended to
						all, regardless of background or composition.
					</p>
					<div className="flex flex-wrap">
						<div className={cardWrapper}>
							<div className={iconWrapper}>
								<img src={home} alt="" className="p-3" />
							</div>
							<div className="">
								<h2 className={h2Style}>75</h2>
								<p className="">Outdoor Activities</p>
							</div>
						</div>
						<div className={cardWrapper}>
							<div className={iconWrapper}>
								<img src={board} alt="" className="p-3" />
							</div>
							<div className="">
								<h2 className={h2Style}>23</h2>
								<p className="">Loving Teachers</p>
							</div>
						</div>
						<div className={cardWrapper}>
							<div className={iconWrapper}>
								<img src={board} alt="" className="p-3" />
							</div>
							<div className="">
								<h2 className={h2Style}>10</h2>
								<p className="">Years counting</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
