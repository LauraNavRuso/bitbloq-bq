import React, { Component } from 'react';

class CommunityStats extends Component {
	render() {
		return (
			<div>
				<div className="project-card--timesLiked">
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
