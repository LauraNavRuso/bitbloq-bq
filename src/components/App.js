import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import ActionsBar from './ActionsBar';
import ProjectCard from './ProjectCard';
import PaginationBar from './PaginationBar';

class App extends Component {
	constructor(props){
			super(props);
			this.requestServer = this.requestServer.bind(this);
			this.handleInput = this.handleInput.bind(this);
			this.state = {
				projects: [],
				creator:{_id:'5a8dc42409d5f4001b7fdea6',
							username:'gamer'},
				projectsForSpecificUser: []
			};
		}

	componentDidMount() {
		let objectUserInputs = {
			creator: {
				_id: `546e259ce4b0bde006d07afe`
			}
		}

		let successFn = (json) => {
			this.setState({
				projectsForSpecificUser: json
			});
		}

		this.requestServer(`https://api-beta-bitbloq.bq.com/bitbloq/v1/project?`,
			objectUserInputs, successFn);
	}

	requestServer(baseApiUrl, objectUserInputs, callbackFn) {
		let apiPagination = `page=0`;
		console.log(apiPagination);
		let creatorData = JSON.stringify(objectUserInputs);
		let apiEndpoint = baseApiUrl + apiPagination + `&query=` + creatorData;

		fetch(apiEndpoint)
		.then(response => response.json())
		.then(json => {
			callbackFn(json);
			console.log(json);
		})
		.catch(function(error){
			console.log('Ha sucedido un error: ' + error);
		}
	)

	}

//Get data from API with promises
	// componentDidMount() {
	// 	fetch('http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/project?page=0')
	// 	.then(response => response.json())
	// 	.then(json => {
	// 		this.setState({
	// 			projects: json
	// 		});
	// 		// console.log('Estoy imprimiendo:', json);
	// 	});
	// }

	//Get data from input
	handleInput(event){
		const searchValue = event.target.value;

		let filterQuery = {
		   "$or":[
		      {
		         "name":{
		            "$regex":searchValue,
		            "$options":"i"
		         }
		      },
		      {
		         "creator":{
		            "$regex":searchValue,
		            "$options":"i"
		         }
		      }
		   ]
		}

		let successFn = (json) => {
			this.setState({
				filter: searchValue,
				projectsForSpecificUser: json
			});
		}

		this.requestServer(`http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/project?`,
			filterQuery, successFn);
	}



//'http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/project?page=0&query={"$or":[{"name":{"$regex":"coche","$options":"i"}},{"creator":{"$regex":"coche","$options":"i"}}]}
//'


render() {

	// let project = this.state.projects;
	// 	//Condición para filtar por letra introducida
	// 	if(this.state.filter){
	// 		characters = characters.filter( character => character.name.toLowerCase().includes(this.state.filter.toLowerCase()))
	// 	}

		return (
				<div className="page">
					<div className="nav">
						<Header />
						<User projects={this.state.projectsForSpecificUser} />
					</div>
					<div className="main">

						<ActionsBar handleInput={this.handleInput} />
						{this.state.projectsForSpecificUser.map(x =>(
							<ProjectCard idProject={x._id} name={x.name} username={x.creator.username}  timesAdded={x.timesAdded} timesViewed={x.timesViewed} />
						))}
						<PaginationBar />
					</div>
				</div>
		);
	}
}

export default App;
