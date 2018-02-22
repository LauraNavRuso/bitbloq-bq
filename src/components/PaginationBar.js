import React, { Component } from 'react';

class PaginationBar extends Component {
	constructor(props) {
		super(props);
		this.updatePagination=this.updatePagination.bind(this);
		this.state = {
			projectsInfoUpdate: false,
			totalProjectsUser: 0,
			totalPagesUser: 0,
			pageProjects: []
		}
}
	componentDidMount() {
		this.updatePagination(0);
	}
	updatePagination(page){
		console.log(page);

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
			this.setState({
				pageProjects: json
			});

		});

	}


paintPagination(){
	let buttons = [];
	for (let i = 1; i<= this.state.totalPagesUser; i++) {
		// console.log('Primer console', this.state.totalPagesUser);
		buttons.push (<button className="button-page">{i}</button>);
}

	if (this.state.totalPagesUser === 1){
		alert('Hola');
			// <button className="pagination-page" disabled>Anterior</button>
	}

	return(
		<div className="pagination">
			<button className="pagination-page" type="button">Anterior</button>
			{buttons}
			<button className="pagination-page" type="button">Siguiente</button>
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
