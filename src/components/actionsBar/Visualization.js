import React, { Component } from 'react';

class Visualization extends Component {
	render() {
		return (
			<div className="container--views">
				<button className={ `views--grid views--grid-${this.props.visualizationMode}Active`}  onClick={this.props.handleClickGridViewMode}></button>
				<button className={ `views--list views--list-${this.props.visualizationMode}Active`}  onClick={this.props.handleClickListViewMode}></button>
			</div>
		);
	}
}

export default Visualization;
