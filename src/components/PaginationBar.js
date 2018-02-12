import React, { Component } from 'react';

class PaginationBar extends Component {
	render() {
		return (

			<div className="pagination">
				<button className="pagination-page">Anterior</button>
				<button className="button-page">1</button>
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
