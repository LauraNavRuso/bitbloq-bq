import React, { Component } from 'react';

class Search extends Component {

	handleSearch(event) {
		const searchValue = event.target.value;

		let filterQuery = {
			 "$and":[
					{
						 "name":{
								"$regex":searchValue,
								"$options":"i"
						 }
					},

					{
						 "creator":{
								"_id":this.props.currentUserId
						 }
					}
			 ]
		}

		this.props.handleSearch(JSON.stringify(filterQuery));
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
