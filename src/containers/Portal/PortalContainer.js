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
					<h6>3/14/2020 Announcement</h6>
					<p>
						Due to increasing concerns with the COVID-19 situation, ACE
						Gymnastics will be making the following adjustments.
						<ul>
							<li>
								Classes- Due to our low student to teacher ratios and our open
								space environment, all classes will continue as normal.
							</li>
							<li>
								Spectators- If your athlete is over 6 we ask that you come in
								for drop off and pick up only. For younger athletes we ask that
								you limit spectators to one adult per family.
							</li>
							<li>
								Wellness- Please do not send your child to class if they or
								anyone in the household are not well. Please ensure they are
								fever free for 48 hours. If you are not sending your child to
								class, please let us know. Students will be sent home if they
								are showing any signs of symptoms.
							</li>
							<li>
								Make up policy- We will continue to offer make ups if your child
								is unable to come to class and will be extending our make up
								policy from 30 days to 60 days.
							</li>
							<li>
								Cleanliness- We will continue to disinfect and sanitze our mats,
								bathrooms, doors, etc every day. We also have hand sanitizer
								stations throughout our facility.
							</li>
						</ul>
						We will be monitoring the situation daily. Please reference our
						website for the most up to date information. We will also post on
						facebook and send any information via email.
					</p>
				</div>
			</div>,
			document.getElementById("portal-root")
		);
	}
}

export default PortalContainer;
