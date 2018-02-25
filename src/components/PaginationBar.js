import React from 'react';

class PaginationBar extends React.Component {
	constructor(props) {
		super(props);
		this.updatePagination=this.updatePagination.bind(this);
		this.paintPagination=this.paintPagination.bind(this);

		this.state = {
			projectsInfoUpdate: false,
			totalProjectsUsers: 0,
			totalPagesUser: 0,
			pageProjects: [],
			actualPage: 1
		}
	}

	componentDidMount() {
		this.updatePagination(0);
	}

	updatePagination(page){
		let baseApi = 'https://api-next.bitbloq.k8s.bq.com/bitbloq/v1/project?';
		let countApi = 'count=*&page=0&query={%22creator%22:{%22_id%22:%22';
		let closeApi = '%22}}';
		let apiPageUser = baseApi + countApi + this.props.userId + closeApi;

		if ((page === 0) && (this.state.projectsInfoUpdate === false)) {
			// llamamos al count
			fetch(apiPageUser)
			.then(response => response.json())
			.then(json =>{
				const totalProjects = json.count;
						console.log('Tenemos los proyectos ' + totalProjects);

				let totalPages = Math.ceil(totalProjects/20);
				console.log('Tenemos las páginas ' + page);
				if (totalPages === 0) totalPages = 1
				this.setState({
					totalProjectsUsers: totalProjects,
					totalPagesUser: totalPages,
					projectsInfoUpdate: true
				});
			});
		}

		// Llamada a la página de proyectos que toque
		fetch(apiPageUser)
		.then(response => response.json())
		.then(json =>{
			console.log('Recibiendo página ' + page);
			this.setState({
				pageProjects: json,
				actualPage: parseInt(page) +1
			});
		});
	}

// updateActualPage(e){
// 	const nextPage =parseInt(e.target.getAttribute('data-page'));
// console.log('> página actual: ' + this.state.actualPage);
// console.log('> página next: ' + nextPage);
//
// 	if (nextPage != this.state.actualPage) {
// 		this.updatePagination(nextPage);
// 	}
// }

paintPagination() {
	let buttons = [];

	// Botón Anterior
	if (this.state.totalPagesUser === 1) {
		buttons.push(<button className="pagination-page" type="button" disabled>Anterior</button>);
	} else {
		if (this.state.actualPage > 1 ) {
			//puedo retroceder
			buttons.push(<button className="pagination-page" type="button" data-page={this.state.actualPage-1}>Anterior</button>);
		} else {
			buttons.push(<button className="pagination-page" type="button" disabled>Anterior</button>);
		}
	}

	//Dependiendo de las páginas
	for (let i = 1; i<= this.state.totalPagesUser; i++) {
		if ( this.state.totalPagesUser === 1) {
			buttons.push (<button className="button-page" disabled>{i}</button>);
		} else {
			buttons.push (<button className="button-page" data-page={i} onClick={this.updateActualPage}>{i}</button>);
		}
	}

	// Botón Siguiente
	if (this.state.totalPagesUser === 1) {
		buttons.push(<button className="pagination-page" type="button" disabled>Siguiente</button>);
	} else {
		if (this.state.actualPage < this.state.totalPagesUser ) {
			//puedo retroceder
			buttons.push(<button className="pagination-page" type="button" data-page={this.state.actualPage+1}>Siguiente</button>);
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
			return (
				<div>{this.paintPagination()}</div>
		);
	}

}

export default PaginationBar;
