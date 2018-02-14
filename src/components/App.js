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
				projects: [],
				projectsForSpecificUser: []
			};
		}

	componentDidMount() {
		let baseApiUrl = `https://api-beta-bitbloq.bq.com/bitbloq/v1/project?`;
		let apiPagination = `page=0`;
		let apiEndpoint = baseApiUrl + apiPagination;

		fetch(apiEndpoint)
		.then(response => response.json())
		.then(json => {
			this.setState({
				projects: json
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

		let baseApiUrl = `https://api-beta-bitbloq.bq.com/bitbloq/v1/project?`;
		let objectUserInputs = {
			creator: {
				// _id: "569cd00be4b03b226c664f6a",
				// username: "naiara1712"
				_id: idCreatorInputContent,
				username: usernameInputContent
			}
		}
		let apiPagination = `page=0`;
		let creatorData = JSON.stringify(objectUserInputs);
		let apiEndpoint = baseApiUrl + apiPagination + `&query=` + creatorData;

		console.log('id creator ' + idCreatorInputContent);
		console.log('username ' + usernameInputContent);


		fetch(apiEndpoint)
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
	)
}

	render() {
		return (
				<div className="page">
					<div className="nav">
						<Header />
						<User />
					</div>
					<div className="main">
						<ActionsBar />
						{this.state.projectsForSpecificUser.map(x =>(
							<ProjectCard name={x.name} />
						))}

						{/* <ProjectCard cosa={this.state.projectsForSpecificUser} /> */}
						<input id="user-input-id-creator" placeholder="Introduce el id-usuario" onChange={this.onChangeInputUserListener}></input>
						<input id="user-input-username" placeholder="Introduce el username" onChange={this.onChangeInputUserListener}></input>
						<PaginationBar />
					</div>
				</div>
		);
	}
}

export default App;
