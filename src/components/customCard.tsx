// import React from 'react'
import pr from "../assets/Images/IMG_0047.jpg";
const textStyle = "mb-5 font-loutfit";
export const CustomCard = ({ img, position, text, title }: any) => {
	return (
		<div>
			<div className="container md:flex  gap-12 mb-32">
				{!position && (
					<>
						<div className="flex-1">
							<img src={pr} alt="kids" className="w-full mb-3" />
						</div>
						<div className="flex-1 text-xl flex flex-col justify-center">
							<p className={textStyle}>
								- Transformative Empowerment: We believe in the transformative
								power of empowerment, enabling women and communities to be
								agents of change. Through education, resources, and support, we
								aim to foster independence and strength.
							</p>
							<p className={textStyle}>
								- Inclusive Care: Our foundation is built on the principle of
								inclusive care. We strive to provide compassionate support and
								services to children and families, ensuring their well-being and
								nurturing their futures, regardless of their background.
							</p>
							<p className={textStyle}>
								- Health for All: Health is a cornerstone of our work. We focus
								on inclusive health interventions and promoting overall
								well-being to ensure that families from all walks of
								life can thrive.
							</p>
						</div>
					</>
				)}
				{position === "right" && (
					<div className="md:flex md:flex-row-reverse gap-7">
						<div className="flex-1">
							<img src={img} alt="kids" className="w-full mb-3" />
						</div>
						<div className="flex-1 text-xl flex flex-col ">
							<h2 className="font-moutfit text-3xl mb-9">{title}</h2>
							<p className="font-loutfit text-2xl">{text}</p>
						</div>
					</div>
				)}
				{position === "left" && (
					<>
						<div className="md:flex-1">
							<img src={img} alt="kids" className="w-full mb-3" />
						</div>
						<div className="flex-1 text-xl flex flex-col ">
							<h2 className="font-moutfit text-3xl mb-9">{title}</h2>

							<p className="font-loutfit text-2xl">{text}</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
