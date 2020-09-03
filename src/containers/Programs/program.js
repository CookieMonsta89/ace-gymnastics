import React from "react";

class ProgramContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div>
					<h1>Program</h1>
				</div>
				<div>
					<select>
						<option value="">Choose Program</option>
					</select>
				</div>
			</div>
		);
	}
}

export default ProgramContainer;
