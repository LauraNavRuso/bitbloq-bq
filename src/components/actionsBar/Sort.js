import React, { Component } from 'react';

class Sort extends Component {

	handleSort(event) {
		const sortValue = event.target.value;

		let sortFilter = (sortValue[0] === 'n') ?
					'&sort={"name":"' + sortValue.substr(1) + '"}' :
					'&sort={"updatedAt":"' + sortValue + '"}';

		let query = {
				"creator":{
					"_id":this.props.currentUserId
				}
		}

		let	filterQuery = JSON.stringify(query) + sortFilter;

		this.props.handleSort(filterQuery);
	}

	render() {
		return (
			<div>
				<select className="sort--button" onChange={this.handleSort.bind(this)}>
					<option className="sort--option" value='' hidden>Orden:</option>
					<option className="sort--option" value='desc'>Más recientes</option>
					<option className="sort--option" value='asc'>Más antiguos</option>
					<option className="sort--option" value='nasc'>Nombre A-Z</option>
					<option className="sort--option" value='ndesc'>Nombre Z-A</option>
					<option className="sort--option" value='votados'>Más votados</option>
				</select>
			</div>
		);
	}
}

export default Sort;
