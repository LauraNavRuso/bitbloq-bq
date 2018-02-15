import React, { Component } from 'react';
import icon from './images/icon-bitbloq.svg';
import iconStory from './images/icon-story.svg';
import iconStudents from './images/icon-students.svg';



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
									<a className="menu--link menu--link-projects" href="http://bitbloq.bq.com/#/bloqsproject">
										<span className="menu--link--span">Proyectos</span>
									</a>
								</li>
								<li className="header--menu--link">
									<a className="menu--link  menu--link-explore" href="http://bitbloq.bq.com/#/explore">
										<span className="menu--link--span">Explora</span>
									</a>
								</li>
								<li className="header--menu--link">
									<a className="menu--link menu--link-users" href="">
										<span className="menu--link--span">Usuarios</span>
									</a>
								</li>
								<li className="header--menu--link">
									<a className="menu--link menu--link-learn" href="http://bitbloq.bq.com/#/learn">
										<span className="menu--link--span">Aprende</span>
									</a>
								</li>
								<li className="header--menu--link">
									<a className="menu--link menu--link-forum" href="http://bitbloq.bq.com/#/forum">
										<span className="menu--link--span">Foro</span>
									</a>
								</li>
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
