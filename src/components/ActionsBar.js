import React, { Component } from 'react';
import Dropdown from './actionsBar/Dropdown';
import Visualization from './actionsBar/Visualization';
import Search from './actionsBar/Search';
import Filter from './actionsBar/Filter';

class ActionsBar extends Component {
	render() {
		return (
			<div className="explore--toolbar">
				<div className="explore--toolbar--container">
					<div className="order--views--container">
						<Dropdown />
						<Visualization />
					</div>
						<Filter />
						<Search />
				</div>
			</div>
		);
	}
}

export default ActionsBar;
