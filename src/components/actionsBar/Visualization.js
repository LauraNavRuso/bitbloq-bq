import React, { Component } from 'react';

class Visualization extends Component {
	render() {
		return (
			<div className="container--views">
				<button className="views--grid"></button>
				<button className="views--list"></button>
			</div>
		);
	}
}

export default Visualization;
