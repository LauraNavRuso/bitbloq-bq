import React, { Component } from 'react';
import images from './images/icon-bitbloq.svg';



class Header extends Component {


	render() {
		return (
					<header className="header">
						<div className="header--icon">
							<a href="#home"><img className="icon--header" alt="icon-header--menu" /></a>
							<nav className="header--menu">
								<ul className="header--menu--list">
									<li className="header--menu--link">Proyectos</li>
								<li className="header--menu-link">Explora</li>
								<li className="header--menu--link">Usuarios</li>
								<li className="header--menu--linl">Aprende</li>
								<li className="header--menu--link">Ayuda</li>
							</ul>
						</nav>
					</div>
					</header>
				);
				}
				}

					export default Header;
