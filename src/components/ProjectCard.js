import React, { Component } from 'react';

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
					style={divStyleEachImg}
				/>
				<div className="project-card--container-info">
					<h3 className="project-card--main-title">{this.props.name}</h3>

					<div className="project-card--project-data">
						<p className="project-card--username">de <span className="project-card--username-content" >{this.props.username}</span></p>

						<div className="project-card--community-stats">
							<div className="project-card--timesLiked" id={this.props.idProject} value={this.props.timesLiked}>
								{this.props.timesLiked}
							</div>
							<div className="project-card--timesDownloaded">
								{this.props.timesDownloaded}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ProjectCard;

			{/* <img className="project-card--img" src={projectImgUrl}/> */}

					// style={{backgroundImage: "url(" + Background + ")"}}

					// background: 'url('+ imgUrl + ') noRepeat center center fixed',
					// backgroundSize: 'cover',

				// background: `url( ${projectImgUrl})`,


			{/* <img src="http://via.placeholder.com/350x100" /> */}

						// background: `url( ${projectImgUrl})`,
