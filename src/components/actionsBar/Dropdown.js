import React, { Component } from 'react';

class Dropdown extends Component {
	render() {
		return (
			<div>
				<select>
					<option value='recientes'>Orden: Más recientes</option>
					<option value='antiguos'>Orden: Más antiguos</option>
					<option value='votados'>Orden: Mejor votados</option>
				</select>
			</div>
		);
	}
}

export default Dropdown;
