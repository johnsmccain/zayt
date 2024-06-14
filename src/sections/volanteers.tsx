// import React from 'react'

import { motion } from "framer-motion";
import { Card } from "../components/card";
import { volanteers } from "../data";
import Style from "./Slider.module.css";

export const Volanteers = () => {
	// useEffect(() => {
	// 	setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
	// });

	// const handleScroll = direction => {
	// 	const { current } = dragSlider;
	// 	const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

	// 	if (direction == "left") {
	// 		current.scrollLeft -= scrollAmount;
	// 	} else {
	// 		current.scrollLeft += scrollAmount;
	// 	}
	// };
	return (
		<div className="bg-customSecondary flex justify-center m">
			<div className="container pt-28 text-white mb-16 px-1">
				<h2 className="text-5xl font-sbdisplay mb-9">Meet Our Volunteers</h2>
				<p className="font-loutfit text-2xl mb-20">
					Zaytfoundation is run by a team of very committed staff both in the
					Nigeria and Sierra Leone, yet we wouldn't be able to do what we do
					without the contribution of volunteers. 
				</p>
				<div>
					<motion.div
						className={
							"w-full overflow-x-scroll overflow-y-hidden md:overflow-visible"
						}
						// ref={dragSlider}
					>
						<motion.div
							// ref={dragSlider}
							// className={Style.slider_box_item}
							className={"flex gap-5"}
							// drag="x"
							// dragConstraints={{ right: 0, left: -width }}
						>
							{volanteers.map((data: any, id: number) => (
								<Card
									img={data.pic}
									name={data.name}
									position={data.position}
									key={id}
								/>
							))}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
