// import React from 'react'

import { CustomCard } from "../components/customCard";
import { intervention_area } from "../data";

export const Intervention = () => {
	return (
		<div className="flex justify-center">
			<div className="container">
				<h2 className="font-sbdisplay font-semibold text-5xl mb-24">
					- Intervention Areas
				</h2>
				{intervention_area.map((data: any, index: number) => (
					<CustomCard
						key={index}
						position={data.position}
						img={data.pic}
						text={data.text}
						title={data.title}
					/>
				))}
			</div>
		</div>
	);
};
