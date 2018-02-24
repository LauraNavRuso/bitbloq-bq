import React, { Component } from 'react';

class Sort extends Component {
	render() {
		return (
			<div>
				<select className="order--button">
					<option className="order--option" value='' hidden>Orden:</option>
					<option className="order--option" value='recientes'>Más recientes</option>
					<option className="order--option" value='antiguos'>Más antiguos</option>
					<option className="order--option" value='a-z'>Nombre A-Z</option>
					<option className="order--option" value='z-a'>Nombre Z-A</option>
					<option className="order--option" value='votados'>Más votados</option>
				</select>
			</div>
		);
	}
}

export default Sort;
