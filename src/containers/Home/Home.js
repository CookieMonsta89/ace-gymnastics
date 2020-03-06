import React from "react";
import CarouselJumbo from "../../components/Carousel/carousel";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProgramSection from "../../components/ProgramSection/programSection";
import MidPageBreak from "../../components/MidPageBreak/midPage.js";
import StaffSection from "../../components/StaffSection/staffSection.js";

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
				<MidPageBreak />
				<StaffSection />
			</div>
		);
	}
}

export default Home;
