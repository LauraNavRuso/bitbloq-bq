import React, { Component } from 'react';
import placa1 from './images/placa1.jpg';

class ProjectCard extends Component {
	render() {
		let baseImgUrl = `https://storage.googleapis.com/bitbloq/images/project/`;
		let projectImgUrl = baseImgUrl + this.props.idProject;

		return (
			<div className="App">
				<div className="grid--project-card">
					<div className="App-header">
						<img className="App-title" src={projectImgUrl}/>
					</div>

					<div className="App-intro">
						<p>Usuario: {this.props.username}</p>
						<p>Nombre del proyecto: {this.props.name}</p>
						<p>Veces descargado: {this.props.timesAdded}</p>
						<p>Veces visto: {this.props.timesViewed}</p>
						<p>Id proyecto: {this.props.idProject}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectCard;
