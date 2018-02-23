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
		this.handleFilter = this.handleFilter.bind(this);
		this.state = {
			projectsForSpecificUser: [],
			filterQuery: ''
			};
		}

	//Method to use a specific user and ask for data to the API
	componentDidMount() {
		let objectUserInputs = {
			creator: {
				_id: '5a8e8d1809d5f4001b7fdea7'
			}
		}

		let successFn = (json) => {
			this.setState({
				projectsForSpecificUser: json
			});
		}

		this.requestServer('http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/project?',
			objectUserInputs, successFn);
	}

	//Ask for data
	requestServer(baseApiUrl, objectUserInputs, callbackFn) {
		let creatorData = JSON.stringify(objectUserInputs);
		let apiEndpoint = baseApiUrl + '&query=' + creatorData;

		fetch(apiEndpoint)
		.then(response => response.json())
		.then(json => {
			callbackFn(json);
			console.log(json);
		})
		.catch(function(error){
		})
	}

	//Get data from input --search button
	handleFilter(filterQuery){
		console.log('filterQuery', filterQuery);

		let successFn = (json) => {
			this.setState({
				filterQuery: filterQuery,
				projectsForSpecificUser: json
			});
		}

		this.requestServer('http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/project?',
			filterQuery, successFn);
	}

	render() {
		return (
			<div className="page">
				<div className="nav">
					<Header />
					<User projects={this.state.projectsForSpecificUser} />
				</div>
				<div className="main">
					<ActionsBar handleSearch={this.handleFilter}
											handleSort={this.handleFilter}/>
					<div className="projects--general-container">
						{this.state.projectsForSpecificUser.map(x =>(
						<ProjectCard idProject={x._id} name={x.name} username={x.creator.username}  timesAdded={x.timesAdded} timesViewed={x.timesViewed} />
						))}
					</div>
					<PaginationBar />
				</div>
			</div>
		);
	}
}

export default App;
