import React, { Component } from 'react';
import SocialNetwork from './user/SocialNetwork';


class User extends Component {
	render() {
		let ImgUrl = `https://storage.googleapis.com/bitbloq/images/avatar/`;
		let avatarImgUrl = ImgUrl + "5a5ca1c4458faa001864b94a";

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
								<h2 className="proyect--number">123456 proyectos</h2>
							</div>
						</div>
						<SocialNetwork className="profile--role"/>
					</div>


			</div>

		);
	}
}

export default User;
