import React, { Component } from 'react';

class Search extends Component {

	handleSearch(event) {
		const searchValue = event.target.value;

		let filterQuery = {
			 "$or":[
					{
						 "name":{
								"$regex":searchValue,
								"$options":"i"
						 }
					},

					{
						 "creator":{
								"$regex":searchValue,
								"$options":"i"
						 }
					}
			 ]
		}

		this.props.handleSearch(filterQuery);
	}

	render() {
		return (
			<div>
				<input className="search--input" placeholder="Buscar..." onChange={this.handleSearch.bind(this)}></input>
			</div>
		);
	}
}

export default Search;
