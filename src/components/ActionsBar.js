import React, { Component } from 'react';
import Dropdown from './actionsBar/Dropdown';
import Visualization from './actionsBar/Visualization';
import Search from './actionsBar/Search';

class ActionsBar extends Component {
	render() {
		return (
			<div className="App">

				<Dropdown />
				<Visualization />
				<Dropdown />
				<Search />


			</div>
		);
	}
}

export default ActionsBar;
