// import React from 'react'

import Marquee from "react-fast-marquee";
import { Card } from "../components/card";
import { volanteers } from "../data";
export const Volanteers = () => {
	return (
		<div className="bg-customSecondary flex justify-center">
			<div className="container pt-28 text-white mb-16">
				<h2 className="text-5xl font-sbdisplay mb-9">Meet Our Volunteers</h2>
				<p className="font-loutfit text-2xl mb-20">
					Zaytfoundation is run by a team of very committed staff both in the
					Nigeria and Sierra Leone, yet we wouldn't be able to do what we do
					without the contribution of volunteers. 
				</p>
				<div>
					<Marquee className="md:flex gap-7">
						{volanteers.map((data: any, id: number) => (
							<Card
								img={data.pic}
								name={data.name}
								position={data.position}
								key={id}
							/>
						))}
					</Marquee>
				</div>
			</div>
		</div>
	);
};
