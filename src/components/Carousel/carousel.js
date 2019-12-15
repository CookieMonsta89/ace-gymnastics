import React, { useState } from "react";
import teamphoto from "../../assets/teamphoto.jpg";
import photo from "../../assets/photo.jpg";
import photo2 from "../../assets/photo2.jpg";
import "../Carousel/carousel.css";
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from "reactstrap";

const items = [
	{
		src: `${teamphoto}`,
		altText: "Slide 1",
		caption: ""
	},
	{
		src: `${photo}`,
		altText: "Slide 2",
		caption: ""
	},
	{
		src: `${photo2}`,
		altText: "Registration Now Open",
		caption: ""
	}
];

const CarouselJumbo = props => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = newIndex => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map(item => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.src}
			>
				<img src={item.src} alt={item.altText} />
				<CarouselCaption
					captionText={item.caption}
					captionHeader={item.caption}
				/>
			</CarouselItem>
		);
	});

	return (
		<Carousel activeIndex={activeIndex} next={next} previous={previous}>
			<CarouselIndicators
				items={items}
				activeIndex={activeIndex}
				onClickHandler={goToIndex}
			/>
			{slides}
			<CarouselControl
				direction="prev"
				directionText="Previous"
				onClickHandler={previous}
			/>
			<CarouselControl
				direction="next"
				directionText="Next"
				onClickHandler={next}
			/>
		</Carousel>
	);
};

export default CarouselJumbo;