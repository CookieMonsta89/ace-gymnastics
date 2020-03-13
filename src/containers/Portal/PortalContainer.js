import React from "react";
import ReactDom from "react-dom";
import "./portalcontainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faExclamationCircle,
	faTimes
} from "@fortawesome/free-solid-svg-icons";

class PortalContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			announcementOpen: false
		};
	}

	openAnnouncement = () => {
		this.setState({
			announcementOpen: !this.state.announcementOpen
		});
	};

	render() {
		const { announcementOpen } = this.state;
		return ReactDom.createPortal(
			<div
				className={
					announcementOpen ? "portal-container-open" : "portal-container-closed"
				}
			>
				<div className="announcement-icon">
					<FontAwesomeIcon
						style={{ cursor: "pointer" }}
						onClick={this.openAnnouncement}
						icon={announcementOpen ? faTimes : faExclamationCircle}
						size="lg"
					/>
					{!announcementOpen ? <h5>Announcement</h5> : null}
				</div>
				<div
					className={
						announcementOpen
							? "announcement-info-open"
							: "announcement-info-closed"
					}
				>
					<h6>3/12/2020 Announcement</h6>
					<p>
						Classes today are CANCELLED due to severe weather. Please call or
						message us with any concerns. Make ups will be offered and can be
						scheduled by calling our office.
					</p>
				</div>
			</div>,
			document.getElementById("portal-root")
		);
	}
}

export default PortalContainer;
