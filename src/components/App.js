import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import ActionsBar from './ActionsBar';
import ProjectCard from './ProjectCard';
import PaginationBar from './PaginationBar';

class App extends Component {
	constructor(props){
			super(props);
			// this.onChangeListener = this.onChangeListener.bind(this);
			this.state = {
				projectsForSpecificUser: []
			};
		}

	componentDidMount() {
		fetch('https://api-beta-bitbloq.bq.com/bitbloq/v1/project?page=0&query=%7B%22creator%22:{%22_id%22:%225a42d48efd2db9001cd5c48c%22,%22username%22:%22piqui%22}%7D')
		.then(response => response.json())
		.then(json => {
			this.setState({
				projectsForSpecificUser: json
			});
			console.log(json);
		})
		.catch(function(error){
			console.log('Ha sucedido un error: ' + error);
		}
	)};

	render() {
		return (
			<div>
				<input placeholder="Introduce el usuario"></input>
				<Header />
				<User />
				<ActionsBar />
				<ProjectCard />
				<PaginationBar />
			</div>
		);
	}
}

export default App;
