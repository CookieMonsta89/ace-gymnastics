import React from "react";
import CarouselJumbo from "../../components/Carousel/carousel";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProgramSection from "../../components/ProgramSection/programSection";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<CarouselJumbo />
				<AboutSection />
				<ProgramSection />
			</div>
		);
	}
}

export default Home;
