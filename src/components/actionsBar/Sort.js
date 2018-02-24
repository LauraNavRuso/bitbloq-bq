import React, { Component } from 'react';

class Sort extends Component {

	handleSort(event) {

		let filterQuery = {

		};

		this.props.handleSort(filterQuery);
	}

	render() {
		return (
			<div>
				<select className="sort--button" onChange={this.handleSort.bind(this)}>
					<option className="sort--option" value='' hidden>Orden:</option>
					<option className="sort--option" value='recientes'>Más recientes</option>
					<option className="sort--option" value='antiguos'>Más antiguos</option>
					<option className="sort--option" value='a-z'>Nombre A-Z</option>
					<option className="sort--option" value='z-a'>Nombre Z-A</option>
					<option className="sort--option" value='votados'>Más votados</option>
				</select>
			</div>
		);
	}
}

export default Sort;
