import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import ActionsBar from './ActionsBar';
import ProjectCard from './ProjectCard';
import PaginationBar from './PaginationBar';

class App extends Component {
	render() {
		return (
			<div>
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
