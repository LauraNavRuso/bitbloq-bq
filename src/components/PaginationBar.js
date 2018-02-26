

import React from 'react';

class PaginationBar extends React.Component {
	constructor(props) {
		super(props);
		this.updatePagination=this.updatePagination.bind(this);
		this.paintPagination=this.paintPagination.bind(this);
		this.updateActualPage=this.updateActualPage.bind(this);
		this.refreshProjectCollection = this.refreshProjectCollection.bind(this);

		this.state = {
			projectsInfoUpdate: false,
			totalProjectsUsers: 0,
			totalPagesUser: 0,
			pageProjects: [],
			actualPage: 1,
			currentFilter: ''
		}
	}

	componentDidMount() {
		this.updatePagination(0);
	}

	updatePagination(page){
		let baseApi = 'http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/project?';
		let countApi = 'count=*&page=0';

		var filter = this.props.filterQuery;
		if ( !filter ){
			filter = {
				creator: {
					_id: this.props.userId
				}
			}
			filter = JSON.stringify(filter);
		}

		let apiPageUser = baseApi + countApi + "&query=" + filter;
		let shouldRefreshCollection = false;

		if ( this.props.filterQuery !== this.state.currentFilter ||
			(page === 0 && this.state.projectsInfoUpdate === false)) {
			//We call the count
			fetch(apiPageUser)
			.then(response => response.json())
			.then(json =>{
				shouldRefreshCollection = true;
				const totalProjects = json.count;
						console.log('Tenemos los proyectos ' + totalProjects);

				let totalPages = Math.ceil(totalProjects/20);
				console.log('Tenemos las páginas ' + page);
				if (totalPages === 0) totalPages = 1
				this.setState({
					totalProjectsUsers: totalProjects,
					totalPagesUser: totalPages,
					projectsInfoUpdate: true,
					currentFilter: this.props.filterQuery
				});
			});
		}
		else
		{

		if ( page != 0 && (this.props.filterQuery === this.state.currentFilter)){
		//We call the projects page that I touch
		fetch(apiPageUser)
		.then(response => response.json())
		.then(json =>{
			shouldRefreshCollection = true;
			console.log('Recibiendo página ' + page);
			this.setState({
				actualPage: parseInt(page)
			});
		});
	}


	}

	if ( shouldRefreshCollection){

	}

	this.refreshProjectCollection(page);
	}

	updateActualPage(e){
		const nextPage =parseInt(e.target.getAttribute('data-page'));
	console.log('> página actual: ' + this.state.actualPage);
	console.log('> página next: ' + nextPage);

		if (nextPage != this.state.actualPage) {
			this.updatePagination(nextPage);
		}
	}

	refreshProjectCollection(page){
		this.props.handlePagination(page-1);
	}

paintPagination() {
	let buttons = [];

	//Previous button
	if (this.state.totalPagesUser === 1) {
		buttons.push(<button className="pagination-page" type="button" disabled>Anterior</button>);
	} else {
		if (this.state.actualPage > 1 ) {
			//I can go back
			buttons.push(<button className="pagination-page" type="button" data-page={this.state.actualPage-1}  onClick={this.updateActualPage} >Anterior</button>);
		} else {
			buttons.push(<button className="pagination-page" type="button" disabled>Anterior</button>);
		}
	}

	//Depending on the pages
	for (let i = 1; i<= this.state.totalPagesUser; i++) {
		if ( this.state.totalPagesUser === 1) {
			buttons.push (<button className="button-page" disabled>{i}</button>);
		} else {
			buttons.push (<button className="button-page" data-page={i} onClick={this.updateActualPage}>{i}</button>);
		}
	}

	//Next button
	if (this.state.totalPagesUser === 1) {
		buttons.push(<button className="pagination-page" type="button" disabled>Siguiente</button>);
	} else {
		if (this.state.actualPage < this.state.totalPagesUser ) {
			//I can go forward
			buttons.push(<button className="pagination-page" type="button" data-page={this.state.actualPage+1}  onClick={this.updateActualPage} >Siguiente</button>);
		} else {
			buttons.push(<button className="pagination-page" type="button" disabled>Siguiente</button>);
		}
	}

	return(
		<div className="pagination">
			{buttons}
		</div>
	)
}

		render() {
			this.updatePagination(0);
			return (
				<div>{this.paintPagination()}</div>
		);
	}
}

export default PaginationBar;
