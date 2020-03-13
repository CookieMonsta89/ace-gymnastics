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
					<h6>3/13/2020 Announcement</h6>
					<p>
						Classes will be cancelled today, March 13th, 2020. This will be done
						so that we can come together as a staff to evaluate how we will deal
						with the current health situation in our community and world. We
						thank you for your patience and understanding as we navigate these
						unknown times. We will be sure to communicate a plan very soon for
						the coming weeks!
					</p>
				</div>
			</div>,
			document.getElementById("portal-root")
		);
	}
}

export default PortalContainer;
