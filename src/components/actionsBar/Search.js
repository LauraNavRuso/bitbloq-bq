import React, { Component } from 'react';

class Search extends Component {

	render() {
		return (
			<div>
				<input className="search--input" placeholder="Buscar..." onChange={this.props.handleInput}></input>
			</div>
		);
	}
}

export default Search;
