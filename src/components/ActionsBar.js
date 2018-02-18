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
					<div className="filter-search--container">
						<Filter />
						<Search />
					</div>
				</div>
			</div>
		);
	}
}

export default ActionsBar;
