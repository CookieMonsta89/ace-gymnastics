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

	applyBodyCSS = () => {
		const { announcementOpen } = this.state;
		if (announcementOpen) {
			document.getElementsByTagName("body")[0].style.overflow = "hidden";
		} else document.getElementsByTagName("body")[0].style.overflow = "auto";
	};

	render() {
		const { announcementOpen } = this.state;
		{
			this.applyBodyCSS();
		}
		return ReactDom.createPortal(
			<div
				className={
					announcementOpen ? "portal-container-open" : "portal-container-closed"
				}
			>
				<div className="announcement-icon" onClick={this.openAnnouncement}>
					<FontAwesomeIcon
						style={{ cursor: "pointer" }}
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
					<h6>3/15/2020 Announcement</h6>
					<h6>Dear ACE Gymnastics families,</h6>
					<p>
						The health and well being of our students, families and staff is
						always our first priority. Our leadership team has worked diligently
						the past 24hours to make decisions that reflect our commitment to
						our students and staff. There has been an enormous amount of
						information to process and we are doing our very best to make
						decisions that are in the benefit of all while supporting the needs
						of our families and staff.
					</p>
					<p>
						We feel it is in the best interest of our staff and students to put
						all classes on hold for next week March 16-20. As the coming week
						progresses, we will evaluate what to do the following week. In
						response to this we are removing expiration dates on missed classes
						for make-ups. Once we reopen, please call our office or email to
						schedule your make up. Our hope is that if the community works
						together, we can get through these times safely and healthy.
					</p>
					<p>
						We feel it is in the best interest of our staff and students to put
						all classes on hold for next week March 16-20. As the coming week
						progresses, we will evaluate what to do the following week. In
						response to this we are removing expiration dates on missed classes
						for make-ups. Once we reopen, please call our office or email to
						schedule your make up. Our hope is that if the community works
						together, we can get through these times safely and healthy. We know
						you love your instructor and have selected the class that works best
						for your schedule. So, we want to encourage you to remain enrolled
						in your class and use our make-up option for those missed classes.
						This helps support our small business staff and keeps your child in
						the class they have grown to love and progress in!
					</p>
					<p>
						We will continue to communicate with you as we have updates. We
						can’t wait to have this behind us so we can all resume our normal
						activities! Thank you for your support and for helping us keep our
						community safe and healthy. We appreciate you supporting ACE
						Gymnastics in a time that is difficult for all small businesses!
					</p>
					<h6>ACE Gymnastics Staff</h6>
				</div>
			</div>,
			document.getElementById("portal-root")
		);
	}
}

export default PortalContainer;
