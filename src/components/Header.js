import React, { Component } from 'react';
import icon from './images/icon-bitbloq.svg';
import iconStory from './images/icon-story.svg';
import iconStudents from './images/icon-students.svg';
import iconUser from './images/robot.png';



class Header extends Component {


	render() {
		return (
			<header className="header">
				<div className="header--icon">
					<a href="https://bitbloq.bq.com/#/">
						<img src={icon} className="header--icon--logo" alt="icon-header--menu" />
					</a>
				</div>
				<nav className="header--menu">
					<ul className="header--menu--list">
						<li className="header--menu--link">
							<a className="menu--link-projects" href="https://bitbloq.bq.com/#/bloqsproject" target="_blank">
								Proyectos
							</a>
						</li>
						<li className="header--menu--link">
							<a className="menu--link-explore" href="https://bitbloq.bq.com/#/explore" target="_blank">
								Explora
							</a>
						</li>
						<li className="header--menu--link">
							<a className="menu--link-users" href="">
								Usuarios
							</a>
						</li>
						<li className="header--menu--link">
							<a className="menu--link-learn" href="https://bitbloq.bq.com/#/learn" target="_blank">
								Aprende
							</a>
						</li>
						<li className="header--menu--link">
							<a className="menu--link-forum" href="https://bitbloq.bq.com/#/forum" target="_blank">
								Foro
							</a>
						</li>
					</ul>
				</nav>
				<div className="menu--image">
					<img className="header--menu-image" src={iconUser} />
				</div>
			</header>
);
}
}
export default Header;
