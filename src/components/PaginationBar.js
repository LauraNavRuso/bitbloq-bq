import React, { Component } from 'react';

class PaginationBar extends Component {
	constructor(props) {
		super(props);
		this.updatePagination=this.updatePagination.bind(this);
		this.updateActualPage=this.updateActualPage.bind(this);
		this.state = {
			projectsInfoUpdate: false,
			totalProjectsUser: 0,
			totalPagesUser: 0,
			pageProjects: [],
			actualPage: 1
		}
}
	componentDidMount() {
		this.updatePagination(0);
	}
	updatePagination(page){

		const url = `https://api-beta-bitbloq.bq.com/bitbloq/v1/project?page=${page}&query=%7B%22creator%22:%7B%22_id%22:%22546e259ce4b0bde006d07afe%22%7D%7D`;

		if ((page === 0) && (this.state.projectsInfoUpdate === false)) {
			// llamamos al count
			const urlCount = url + '&count=%2A';
			fetch(urlCount)
			.then(response => response.json())
			.then(json =>{
				const totalProjects = json.count;
				let totalPages = Math.ceil(totalProjects/20);
				if (totalPages === 0) totalPages = 1
				this.setState({
					totalProjectsUser: totalProjects,
					totalPagesUser: totalPages,
					projectsInfoUpdate: true
				});
			});

		}

		// Llamada de los página de proyectos que toque
		fetch(url)
		.then(response => response.json())
		.then(json =>{
			console.log('Recibiendo página ' + page);
			this.setState({
				pageProjects: json,
				actualPage: parseInt(page) +1
			});

		});

	}

updateActualPage(e){
	console.log('>>>>')
	const nextPage =parseInt(e.target.getAttribute('data-page'));

console.log('> página actual: ' + this.state.actualPage);
console.log('> página next: ' + nextPage);
	if (nextPage != this.state.actualPage) {
		console.log('HAGO LA PETICIÓN, A lA LOCURA!');
		this.updatePagination(nextPage);
	}
}

paintPagination(){
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

	for (let i = 1; i<= this.state.totalPagesUser; i++) {
		// console.log('Primer console', this.state.totalPagesUser);
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

	// if (this.state.totalPagesUser === 1){
	// 	alert('Hola');
	// 		// <button className="pagination-page" disabled>Anterior</button>
	// }

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
