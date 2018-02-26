import React, { Component } from 'react';
import icon from './images/icon-bitbloq.svg';
import iconUser from './images/robot.png';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header--icon">
					<a href="http://bitbloq.bq.com/#/">
						<img src={icon} className="header--icon--logo" alt="icon-header--menu" />
					</a>
				</div>
				<nav className="header--menu">
					<ul className="header--menu--list">
						<li className="header--menu--link">
							<a className="menu--link-projects" href="http://bitbloq.bq.com/#/bloqsproject" target="_blank" rel="noopener noreferrer">
								Proyectos
							</a>
						</li>
						<li className="header--menu--link">
							<a className="menu--link-explore" href="http://bitbloq.bq.com/#/explore" target="_blank" rel="noopener noreferrer">
								Explora
							</a>
						</li>
						<li className="header--menu--link">
							<a className="menu--link-users" href="">
								Usuarios
							</a>
						</li>
						<li className="header--menu--link">
							<a className="menu--link-learn" href="http://bitbloq.bq.com/#/learn" target="_blank" rel="noopener noreferrer">
								Aprende
							</a>
						</li>
						<li className="header--menu--link">
							<a className="menu--link-forum" href="http://bitbloq.bq.com/#/forum" target="_blank" rel="noopener noreferrer">
								Foro
							</a>
						</li>
					</ul>
				</nav>
				<div className="menu--image">
					<img className="header--menu-image" src={iconUser} alt="icon-user"/>
				</div>
			</header>
);
}
}
export default Header;
