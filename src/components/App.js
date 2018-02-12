import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import ActionsBar from './ActionsBar';
import ProjectCard from './ProjectCard';
import PaginationBar from './PaginationBar';

class App extends Component {
	constructor(props){
			super(props);
			this.onChangeInputUserListener = this.onChangeInputUserListener.bind(this);
			this.state = {
				projectsForSpecificUser: []
			};
		}

	componentDidMount() {
		let userInputContent = document.getElementById('user-input-id-creator').value;
		let usernameInputContent = document.getElementById('user-input-username').value;

		fetch(`https://api-beta-bitbloq.bq.com/bitbloq/v1/project?page=0&query=%7B%22creator%22:{%22_id%22:%22569cd00be4b03b226c664f6a%22,%22username%22:%22naiara1712%22}%7D`)
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


	onChangeInputUserListener() {
		let idCreatorInputContent = document.getElementById('user-input-id-creator').value;
		let usernameInputContent = document.getElementById('user-input-username').value;
		console.log('id creator ' + idCreatorInputContent);
		console.log('username ' + usernameInputContent);
	}


	render() {
		return (
			<div>
				<input id="user-input-id-creator" placeholder="Introduce el id-usuario" onChange={this.onChangeInputUserListener}></input>
				<input id="user-input-username" placeholder="Introduce el username" onChange={this.onChangeInputUserListener}></input>
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
