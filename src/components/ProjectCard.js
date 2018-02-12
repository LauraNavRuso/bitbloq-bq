import React, { Component } from 'react';
import placa1 from './images/placa1.jpg';

class ProjectCard extends Component {
	render() {
		return (
			<div className="grid--project-card">
				<div className="App-header">
					<img className="App-title" src={placa1}/>
				</div>

				<p className="App-intro">
					AQUÍ QUEREMOS PRINTEAR PARTE DEL RESULTADO DEL JSON
				</p>
			</div>
		);
	}
}

export default ProjectCard;
