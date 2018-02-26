import React, { Component } from 'react';

class CommunityStats extends Component {
	render() {
		return (
			<div>
				<div
					className={ `project-card--timesLiked project-card--timesLiked-${this.props.likedState}`}
					value={this.props.idProject} onClick={this.props.handleClickTimesLiked}>
					{this.props.timesLiked}
				</div>
				<div className="project-card--timesDownloaded">
					{this.props.timesDownloaded}
				</div>
			</div>
		)
}
}

export default CommunityStats;
