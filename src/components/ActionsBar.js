import React, { Component } from 'react';
import Sort from './actionsBar/Sort';
import Visualization from './actionsBar/Visualization';
import Search from './actionsBar/Search';
import Filter from './actionsBar/Filter';

class ActionsBar extends Component {

	//let sort={"updatedAt":"asc"};
	//let sortObject = (sortValue[0] === 'n') ? {"name": sortValue.substr(1)} : {"updatedAt": sortValue};
//?&sort={%22updatedAt%22:%22desc%22}&query={%22creator%22:{%22_id%22:%225a8e8d1809d5f4001b7fdea7%22}}
//?&query={%22$and%22:[{%22updatedAt%22:%22asc%22},{%22creator%22:{%22_id%22:%225a8e8d1809d5f4001b7fdea7%22}}]}

	render() {
		return (
			<div className="explore--toolbar">
				<div className="explore--toolbar--container">
					<div className="order--views--container">
						<Sort handleSort={this.props.handleSort}
									currentUserId={this.props.currentUserId}/>
						<Visualization />
					</div>
					<div className="filter-search--container">
						<Filter />
						<Search handleSearch={this.props.handleSearch}
						 				currentUserId={this.props.currentUserId}/>
					</div>
				</div>
			</div>
		);
	}
}

export default ActionsBar;
