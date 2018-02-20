import React, { Component } from 'react';

class PaginationBar extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.updatePagination=this.updatePagination.bind(this);
	// 	this.totalPages=this.totalPages.bind(this);
	// 	this.state = {
	// 		totalProjectsUser: 0,
	// 		totalPagesUser: 0
	// 	}


// 	componentDidMount() {
// 		this.updatePagination(0);
// 	}
// 	updatePagination(page){
// 		let url = `https://api-beta-bitbloq.bq.com/bitbloq/v1/project?page=${page}&query=%7B%22creator%22:%7B%22_id%22:%22546e259ce4b0bde006d07afe%22%7D%7D`;
// 		if (page === 0) {
// 			url = url + '&count=%2A'
// 		}
// 		fetch(url);
// 		.then(response => response.json())
// 		.then(json =>{
// 			if (page===0) {
// 			console.log(json.count);
// 			const totalProjects = json.count;
// 			const totalPages = Math.ceil(totalProjects/20);
// 			this.setState({
// 				totalProjectsUser: totalProjects,
// 				totalPagesUser: totalPages
// 			});
// 		}
// 		});
//
// 	}
//
//
// totalPages(){
// 	let total = this.state.totalProjectsUser;
// 	let totalPage = total/20;
// 	let pageUser = Math.ceil(totalPage);
// 	console.log(pageUser);
//
// }

	render() {
		return (
			<div className="pagination">
				<button className="pagination-page">Anterior</button>
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
