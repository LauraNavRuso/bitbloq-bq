import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import ActionsBar from './ActionsBar';
import ProjectCard from './ProjectCard';
import PaginationBar from './PaginationBar';

class App extends Component {
	constructor(props){
		super(props);

			// una matriz de ejemplo de elementos para ser paginado
    	// let exampleItems = exampleItems.range(1, 217).map(i => { return { id: i, name: 'Item ' + i }; });

      this.onChangePage = this.onChangePage.bind(this);
			// this.onChangeInputUserListener = this.onChangeInputUserListener.bind(this);
			this.state = {
				projects: [{}],
				projectsForSpecificUser: [],
				// exampleItems: exampleItems,
				pageOfItems: []

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

onChangePage(pageOfItems) {
        // estado de actualización con nueva página de elementos
        this.setState({ pageOfItems: pageOfItems });
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

						<ProjectCard />

						<div className="container">
							<div className="text-center">
								{this.state.projectsForSpecificUser.map(x =>(
									<ProjectCard idProject={x._id} name={x.name} username={x.creator.username}  timesAdded={x.timesAdded} timesViewed={x.timesViewed} />
								))}
								<PaginationBar items={this.state.exampleItems} onChangePage={this.onChangePage} />
							</div>
						</div>



					</div>
				</div>
		);
	}
}

export default App;
