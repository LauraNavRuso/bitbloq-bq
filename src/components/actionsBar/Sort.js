import React, { Component } from 'react';

class Sort extends Component {
	render() {
		return (
			<div>
				<select className="sort--button">
					<option className="sort--option" value='recientes'>Orden: Más recientes</option>
					<option className="sort--option" value='antiguos'>Orden: Más antiguos</option>
					<option className="sort--option" value='votados'>Orden: Mejor votados</option>
				</select>
			</div>
		);
	}
}

export default Sort;
