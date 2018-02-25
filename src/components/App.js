import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import ActionsBar from './ActionsBar';
import ProjectCard from './ProjectCard';
import PaginationBar from './PaginationBar';

class Project {
	constructor (_id, name, codeProject, creator) {
		this._id = _id;
		this.name = name;
		this.codeProject = codeProject;
		this.creator = creator;
		this.timesLiked = this.getRandomInt(1,150);
		this.timesDownloaded = this.getRandomInt(1,100);
	}

	getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}

class App extends Component {
	constructor(props){
		super(props);
		this.requestServer = this.requestServer.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.getRandom = this.getRandom.bind(this);
		this.createProjectsWithStats = this.createProjectsWithStats.bind(this);
		this.handleClickListViewMode =
		this.handleClickListViewMode.bind(this);

		// this.handleLikeClick = this.handleLikeClick.bind(this);

		this.state = {
			projectsForSpecificUser: [],
			filterQuery: '',
			randomNumber:0,
			userIdArray: ['5a8e8d1809d5f4001b7fdea7','5a8dc42409d5f4001b7fdea6','581194d501c9810017bc8f48',],
			userId:'',
			visualizationMode: 'grid'
			//userId: '5a8e8d1809d5f4001b7fdea7'
					// userId: `546e259ce4b0bde006d07afe`    //CON PROYECTOS
				// userId: '581194d501c9810017bc8f48'      //con datos de usuario
			}
		}

	componentWillMount(){
		let random = this.getRandom(this.state.userIdArray.length);
		this.setState({
			randomNumber:random,
			userId:this.state.userIdArray[random]
		});
	}


	createProjectsWithStats(json) {
		let projectsWithStats = json.map( x =>
		{
			return new Project(x._id, x.name, x.codeProject, x.creator);
		})

		return projectsWithStats;
	}


	componentDidMount() {
		let baseApiUrl = `http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/project?`;
		let objectUserInputs = {
			creator: {
				_id: this.state.userIdArray[this.state.randomNumber]
			}
		}

		let successFn = (json) => {
			this.setState({
				projectsForSpecificUser: this.createProjectsWithStats(json)
			});
		}

		this.requestServer(baseApiUrl, JSON.stringify(objectUserInputs), successFn);
	}

	//Ask for data
	getRandom(number){
		return Math.floor(Math.random()*number);
	}

	requestServer(baseApiUrl, queryUrl, callbackFn) {
		//let creatorData = JSON.stringify(objectUserInputs);
		console.log(queryUrl);
		let apiEndpoint = baseApiUrl + '&query=' + queryUrl;

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
				projectsForSpecificUser: this.createProjectsWithStats(json)
			});
		}

		this.requestServer('http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/project?',
		filterQuery, successFn);
	}
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
								projectsForSpecificUser: this.createProjectsWithStats(json)
							});
						}

						this.requestServer('http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/project?',
						filterQuery, successFn);
						}

						//'http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/project?page=0&query={"$or":[{"name":{"$regex":"coche","$options":"i"}},{"creator":{"$regex":"coche","$options":"i"}}]}
						//'

			handleClickListViewMode() {
				this.setState({
					visualizationMode: 'list'
				})
			}

	render() {
		return (
			<div className="page">
				<div className="nav">
					<Header />
					<User projects={this.state.projectsForSpecificUser} userId={this.state.userId} />
				</div>
				<div className="main">
					<ActionsBar handleSearch={this.handleFilter}
						handleSort={this.handleFilter}
						currentUserId={this.state.userId}
						handleInput={this.handleInput}
						handleClickListViewMode={this.handleClickListViewMode}/>
					<div className={`projects--general-container-${this.state.visualizationMode}`}>
						{this.state.projectsForSpecificUser.map(x =>(
							<ProjectCard idProject={x._id} name={x.name} username={x.creator.username}
								timesLiked={x.timesLiked}
								timesDownloaded={x.timesDownloaded}
							/>
						))}

					</div>
					<PaginationBar userId={this.state.userId}/>
				</div>
			</div>
		);
	}
}

export default App;
