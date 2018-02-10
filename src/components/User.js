import React, { Component } from 'react';
import SocialNetwork from './user/SocialNetwork';

class User extends Component {
	render() {
		return (
			<div className="App">
				<div class="profile">
					<div class="wrapper">
						<div class="profile--avatar">
							<img src="https://cdn.pixabay.com/photo/2013/07/12/12/18/user-145538_960_720.png" alt="name" class="profile--avatar-image"/>
						</div>
						<h1 class="profile--name">Nombre y apellido</h1>
						<h2 class="profile--role">Username</h2>
					</div>
				</div>
				<SocialNetwork />
			</div>
		);
	}
}

export default User;
