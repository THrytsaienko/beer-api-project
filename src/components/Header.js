import React from 'react';

const Header = (props) => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg d-flex justify-content-center justify-content-sm-between navbar-dark">
				<span className="navbar-brand text-white" href="index.html">Beans Love Beers</span>
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="index.html">Home</a>
					<a className="nav-item nav-link" href="#">Favorites</a>
				</div>
			</nav>
		</header>
	)
}

export default Header;