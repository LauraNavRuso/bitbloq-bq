import React, { Component } from 'react';

class PaginationBar extends Component {
	constructor(props) {
		super(props);
		this.handleClickPagination=this.handleClickPagination.bind(this);
		this.totalPages=this.totalPages.bind(this);
		this.state = {
			totalProjectsUser: ''
		}
	}


	handleClickPagination(){
		fetch('https://api-beta-bitbloq.bq.com/bitbloq/v1/project?count=%2A&page=0&query=%7B%22creator%22:%7B%22_id%22:%22546e259ce4b0bde006d07afe%22%7D%7D')
		.then(response => response.json())
		.then(json =>{
			this.setState({
				totalProjectsUser: json.count
			});
			// let total = this.state.totalProjectsUser;
			// let suma = total/20;
			// let hola = Math.ceil(suma);
			// console.log(this.state.totalProjectsUser);
		});

	}



totalPages(){
	let total = this.state.totalProjectsUser;
	let totalPage = total/20;
	let pageUser = Math.ceil(totalPage);
	console.log(pageUser);
	alert(pageUser);
}




	render() {
		return (
			<div className="pagination">
				<button className="pagination-page" onClick={this.handleClickPagination}>Anterior</button>
				<button className="button-page" onClick={this.totalPages}>1</button>
				<button className="button-page">2</button>
				<button className="button-page">3</button>
				<button className="button-page">4</button>
				<button className="button-page">5</button>
				<button className="pagination-page">Siguiente</button>
			</div>
		);
	}
}

export default PaginationBar;
