import React, { Component } from 'react';
import icon from './images/icon-bitbloq.svg';
import iconStory from './images/icon-story.svg';
import iconStudents from './images/icon-students.svg';



class Header extends Component {


	render() {
		return (
					<header className="header">
						<div className="header--icon">
							<a href="#home"><img src={icon} className="header--icon--logo" alt="icon-header--menu" /></a>
						</div>
						<nav className="header--menu">
							<ul className="header--menu--list">
								<li className="header--menu--link">Proyectos</li>
								<li className="header--menu--link">Explora</li>
								<li className="header--menu--link">
									<img src={iconStudents} className="menu--link-icon" />
									<span className="menu--link--span">Usuarios</span>
								</li>
								<li className="header--menu--link">
									<img src={iconStory} className="menu--link-icon" />
									<span className="menu--link--span">Aprende</span>
								</li>
								<li className="header--menu--link">Ayuda</li>
							</ul>
						</nav>
						<div className="menu--button">
							<button className="header--menu--button">Entrar</button>
						</div>
					</header>
				);
				}
				}

					export default Header;
