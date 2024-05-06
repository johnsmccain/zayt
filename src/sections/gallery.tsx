// import React from "react";

import { gallery } from "../data";

export const Gallery = () => {
	return (
		<div className="flex justify-center ">
			<div className="container mb-28">
				<h2 className="font-sbdisplay font-semibold text-5xl mt-24 mb-20">
					Gallery
				</h2>
				<div className="flex flex-wrap md:justify-between justify-center gap-6">
					{gallery.map((pic, id: number) => (
						<img
							src={pic}
							key={id}
							style={{ filter: "grayscale(100%)" }}
							className="md:max-w-96 w-full"
						/>
					))}
				</div>
			</div>
		</div>
	);
};
