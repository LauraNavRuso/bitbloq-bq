import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import ActionsBar from './ActionsBar';
import ProjectCard from './ProjectCard';
import PaginationBar from './PaginationBar';

class App extends Component {
	constructor(props) {
			super(props);
			this.props = {
				timesLiked: []
			}
			this.state = {
				projectsForSpecificUser: []
			};
		}

	componentDidMount() {
		let baseApiUrl = `https://api-beta-bitbloq.bq.com/bitbloq/v1/project?`;
		let objectUserInputs = {
			creator: {
				_id: `546e259ce4b0bde006d07afe`
			}
		}
		let apiPagination = `page=0`;
		let creatorData = JSON.stringify(objectUserInputs);
		let apiEndpoint = baseApiUrl + apiPagination + `&query=` + creatorData;

		fetch(apiEndpoint)
		.then(response => response.json())
		.then(json => {
			this.setState({
				projectsForSpecificUser: json
			});
		})
		.catch(function(error){
			console.log('Ha sucedido un error: ' + error);
		})




		// for (var i = 0; i < this.state.projectsForSpecificUser.length; i++) {
		// 	this.state.projectsForSpecificUser.timesLiked=timesLikedArray[i];
		// }

		// for (var i = 0; i < this.state.projectsForSpecificUser.length; i++) {
		// 	this.setState({
		// 		projectsForSpecificUser.timesLiked=timesLikedArray[i];
		// 	})
		// }
		// console.log(this.state.projectsForSpecificUser);
}

		render() {
			// const getRandomInt = (min, max) =>
			// 	Math.floor(Math.random() * (max - min + 1) + min);
			//
			// const timesLikedArray = [];
			//
			// for (var i = 0; i < 45; i++) {
			// 	const numberToPushToArray = getRandomInt(1,150);
			// 	timesLikedArray.push(numberToPushToArray);
			// }

			// this.setState({
			// 	timesLiked: timesLikedArray
			// })

			// console.log(timesLikedArray);
			//
			// {this.state.projectsForSpecificUser.map(x => (
			// 	x.timesLiked = timesLikedArray
			// ))}

		return (
				<div className="page">
					<div className="nav">
						<Header />
						<User projects={this.state.projectsForSpecificUser} />
					</div>
					<div className="main">

						<ActionsBar />
						<div className="projects--general-container">



							{this.state.projectsForSpecificUser.map(x =>(
								<ProjectCard idProject={x._id} name={x.name} username={x.creator.username}  timesAdded={x.timesAdded} timesViewed={x.timesViewed}
								/>
							))}
						</div>
						<PaginationBar />
					</div>
				</div>
		);
	}
}

export default App;
