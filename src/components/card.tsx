// import React from 'react'

export const Card = (prop: any) => {
	return (
		<div className="max-h-[467.23px] max-w-[442.93px] min-w-80 relative rounded-lg">
			<img
				src={prop.img}
				alt="official"
				className="rounded-md h-full w-full object-cover"
			/>
			<div className="absolute bottom-0 bg-slate-700 bg-opacity-50 w-full p-8 font-loutfit font-semibold text-lg">
				<p className="">{prop.name}</p>
				<p className="">{prop.position}</p>
			</div>
		</div>
	);
};
