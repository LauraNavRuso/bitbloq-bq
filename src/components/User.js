import React, { Component } from 'react';
import SocialNetwork from './user/SocialNetwork';


class User extends Component {
	render() {
		return (
			<div className="App">
				<div className="profile">
					<div className="wrapper">
						<div className="profile--avatar">
							<img src="https://thumbs.dreamstime.com/b/icono-del-vector-de-la-silueta-de-la-persona-ejemplo-blanco-y-negro-del-avatar-del-usuario-icono-linear-del-esquema-93005311.jpg" alt="name" className="profile--avatar-image"/>
						</div>
						<div className="profile--name">
							<h1 className="profile--name-real">Nombre y apellido</h1>
							<h2 className="profile--name-user">Username</h2>
						</div>
						<SocialNetwork className="profile--role"/>
					</div>
				</div>

			</div>

		);
	}
}

export default User;
