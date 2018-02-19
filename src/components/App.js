import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import ActionsBar from './ActionsBar';
import ProjectCard from './ProjectCard';
import PaginationBar from './PaginationBar';

class App extends Component {
	constructor(props){
<<<<<<< HEAD
		super(props);

			// una matriz de ejemplo de elementos para ser paginado
    	let exampleItems = exampleItems.range(1, 217).map(i => { return { id: i, name: 'Item ' + i }; });

      this.onChangePage = this.onChangePage.bind(this);
			this.onChangeInputUserListener = this.onChangeInputUserListener.bind(this);
			this.state = {
				projects: [{}],
				projectsForSpecificUser: [],
				exampleItems: exampleItems,
				pageOfItems: []
=======
			super(props);
			this.state = {
				projectsForSpecificUser: []
>>>>>>> 0a8095a8151a9e310fb8718dad18da148808ffd7
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
			console.log(json);
		})
		.catch(function(error){
			console.log('Ha sucedido un error: ' + error);
		}
	)
}
<<<<<<< HEAD
onChangePage(pageOfItems) {
        // estado de actualización con nueva página de elementos
        this.setState({ pageOfItems: pageOfItems });
    }
	render() {
=======

render() {
>>>>>>> 0a8095a8151a9e310fb8718dad18da148808ffd7
		return (
				<div className="page">
					<div className="nav">
						<Header />
						<User />
					</div>
					<div className="main">

						<ActionsBar />
<<<<<<< HEAD
						<ProjectCard />
						<input id="user-input-id-creator" placeholder="Introduce el id-usuario" onChange={this.onChangeInputUserListener}></input>
						<input id="user-input-username" placeholder="Introduce el username" onChange={this.onChangeInputUserListener}></input>
						<div className="container">
							<div className="text-center">
								{this.state.pageOfItems.map(item =>
									<div key={item.id}>{item.name}</div>
								)}
								<PaginationBar items={this.state.exampleItems} onChangePage={this.onChangePage} />
							</div>
						</div>
=======
						{this.state.projectsForSpecificUser.map(x =>(
							<ProjectCard idProject={x._id} name={x.name} username={x.creator.username}  timesAdded={x.timesAdded} timesViewed={x.timesViewed} />
						))}
						<PaginationBar />
>>>>>>> 0a8095a8151a9e310fb8718dad18da148808ffd7
					</div>
				</div>
		);
	}
}

export default App;
