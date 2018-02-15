import React, { Component } from 'react';
import placa1 from './images/placa1.jpg';

class ProjectCard extends Component {
	render() {
		return (
			<div className="App">
				<div className="grid--project-card">
					<div className="App-header">
						<img className="App-title" src={placa1}/>
					</div>

					<div className="App-intro">
						{this.props.name}
					</div>
				</div>
			</div>
				);
	}
}

export default ProjectCard;
