import React, { Component } from 'react';
import placa1 from './images/placa1.jpg';

class ProjectCard extends Component {
	render() {
		let baseImgUrl = `http://storage.googleapis.com/bitbloq-next/images/project/`;
		let projectImgUrl = baseImgUrl + this.props.idProject;

		return (
			<div className="projects--project-card-container">
				<div className="project-card--container-img">
					<img className="project-card--img" src={projectImgUrl}/>

				</div>

				<div className="project-card--container-info">
					<h3 className="project-card--main-title">{this.props.name}</h3>

					<div className="project-card--project-data">
						<p className="project-card--username">de <span className="project-card--username-content" >{this.props.username}</span></p>

						<div className="project-card--community-stats">
							<div className="project-card--timesViewed">
								{this.props.timesViewed}
							</div>
							<div className="project-card--timesAdded">
								{this.props.timesAdded}
							</div>

						</div>

					</div>
				</div>
			</div>
		);
	}
}
export default ProjectCard;
