import React, { Component } from 'react';
import SocialNetwork from './user/SocialNetwork';


class User extends Component {
	constructor(props){
			super(props);
			this.state = {
				totalProjectsUser: ''
			};
		}
	componentDidMount(){
		fetch('https://api-beta-bitbloq.bq.com/bitbloq/v1/project?count=%2A&page=0&query=%7B%22creator%22:%7B%22_id%22:%22546e259ce4b0bde006d07afe%22%7D%7D')
			.then(response => response.json())
			.then(json =>{
				this.setState({
					totalProjectsUser: json.count
				});
			})
	}

	render() {
		let ImgUrl = `https://storage.googleapis.com/bitbloq/images/avatar/`;
		let id = this.props.projects.slice(0, 1).map(x => (
			x.creator._id
		));
		let avatarImgUrl = ImgUrl + id;
		// let avatarImgUrl = ImgUrl + "5a5ca1c4458faa001864b94a";

		return (
				<div className="profile">
					<div className="wrapper">
						<div className="profile--avatar">
							<img src={avatarImgUrl} alt="avatar" className="profile--avatar-image"/>
						</div>
						<div className="user--data">
							<div className="profile--name">
								<h1 className="profile--name-real">Nombre y apellido</h1>
								<h2 className="profile--name-user">Username</h2>
							</div>
							<div className="proyect">
								<h2 className="proyect--number">{this.state.totalProjectsUser} proyectos</h2>
							</div>
						</div>
						<SocialNetwork className="profile--role"/>
					</div>


			</div>

		);
	}
}

export default User;
