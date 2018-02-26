import React, { Component } from 'react';
import CommunityStats from './projectCard/CommunityStats';

class ProjectCard extends Component {
	render() {
		let baseImgUrl = `http://storage.googleapis.com/bitbloq-next/images/project/`;
		let projectImgUrl = baseImgUrl + this.props.idProject;
		// let projectImgUrl =	'http://via.placeholder.com/350x150';

		const divStyleEachImg = {
			backgroundImage: `url('${projectImgUrl}' )`,
			backgroundSize: 'cover'
		};

		return (
			<div className="projects--project-card-container">
				<div className="project-card--container-img"
					style={divStyleEachImg}>
					<a className="project-card--img-link" href="http://front-next.bitbloq.k8s.bq.com/#/bloqsproject/5a8fe5cbeca0ca001790e1b0" target="_blank">
					</a>
				</div>
				<div className="project-card--container-info">
					<h3 className="project-card--main-title">{this.props.name}</h3>

					<p className="project-card--project-description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
					</p>

					<div className="project-card--project-data">
						<p className="project-card--username">de <span className="project-card--username-content" >{this.props.username}</span></p>
						<CommunityStats  timesLiked={this.props.timesLiked} timesDownloaded={this.props.timesDownloaded} />
					</div>
				</div>
			</div>
		);
	}
}
export default ProjectCard;
