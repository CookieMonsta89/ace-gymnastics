import React from "react";
import "./Program.css";
import BannerTitle from "../../components/BannerTitle/bannertitle";
import ProgramCards from "../../components/ProgramCards/programcards";

class ProgramContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Programs",
		};
	}

	render() {
		return (
			<div className="program-container">
				<div className="program-banner">
					<BannerTitle title={this.state.title} />
				</div>
				<div className="program-cards-container">
					<ProgramCards />
				</div>
			</div>
		);
	}
}

export default ProgramContainer;
