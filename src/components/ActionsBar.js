import React, { Component } from 'react';
import Sort from './actionsBar/Sort';
import Visualization from './actionsBar/Visualization';
import Search from './actionsBar/Search';
import Filter from './actionsBar/Filter';

class ActionsBar extends Component {
	render() {
		return (
			<div className="explore--toolbar">
				<div className="explore--toolbar--container">
					<div className="order--views--container">
						<Sort handleSort={this.props.handleSort}
							currentUserId={this.props.currentUserId}/>
						<Visualization handleClickListViewMode={this.props.handleClickListViewMode} handleClickGridViewMode={this.props.handleClickGridViewMode}
							visualizationMode={this.props.visualizationMode}/>
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
