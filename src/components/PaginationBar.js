import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div className="pagination">
				<button className="pagination-page">Anterior</button>
				<button className="page">1</button>
				<button className="page">2</button>
				<button className="page">3</button>
				<button className="page">4</button>
				<button className="page">5</button>
				<button className="pagination-page">Siguiente</button>

			</div>
		);
	}
}

export default App;
