import React, { Component } from 'react';
import SocialNetwork from './user/SocialNetwork';

class User extends Component {
	constructor(props){
			super(props);
			this.state = {
				totalProjectsUser: '',
				firstName : 'Nombre',
				lastName : ' y apellido',
				username : 'Username'
			};
		}
	componentDidMount(){
		let apiQueryUser = 'http://api-next.bitbloq.k8s.bq.com/bitbloq/v1/user/'+this.props.userId;
		fetch(apiQueryUser)
		.then(response => response.json())
		.then(json =>{
			let firstNameData = json.firstName;
			let lastNameData = json.lastName;
			let usernameData = json.username;
			this.setState({
				firstName: firstNameData,
				lastName: lastNameData,
				username: usernameData
			});
		});
		let baseQueryCount = 'https://api-beta-bitbloq.bq.com/bitbloq/v1/project?';
		let countAndQuery = 'count=*&query={%22creator%22:{%22_id%22:%22';
		let closeQuery = '%22}}';
		let apiQueryCount = baseQueryCount + countAndQuery + this.props.userId + closeQuery;
		fetch(apiQueryCount)
		.then(response => response.json())
		.then(json =>{
			this.setState({
				totalProjectsUser: json.count
			});
		});
	}

	render() {
		let ImgUrl = `http://storage.googleapis.com/bitbloq-next/images/avatar/`;
		let id = this.props.userId;
		let avatarImgUrl = ImgUrl + id;

		return (
				<div className="profile">
					<div className="wrapper">
						<div className="profile--avatar">
							<img src={avatarImgUrl} alt="avatar" className="profile--avatar-image"/>
						</div>
						<div className="user--data">
							<div className="profile--name">
								<h1 className="profile--name-real">{this.state.firstName} {this.state.lastName}</h1>
								<h2 className="profile--name-user">{this.state.username}</h2>
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
