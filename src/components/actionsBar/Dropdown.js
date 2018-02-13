import React, { Component } from 'react';

class Dropdown extends Component {
	render() {
		return (
			<div>
				<select className="order--view">
					<option className="order--option" value='recientes'>Orden: Más recientes</option>
					<option className="order--option" value='antiguos'>Orden: Más antiguos</option>
					<option className="order--option" value='a-z'>Orden: Nombre A-Z</option>
					<option className="order--option" value='z-a'>Orden: Nombre Z-A</option>
					<option className="order--option" value='votados'>Orden: Más votados</option>
				</select>
			</div>
		);
	}
}

export default Dropdown;
