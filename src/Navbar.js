import { Link } from 'react-router-dom';
import { useState } from 'react';
import DarkModeButton from './DarkModeButton';

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	function handleShowMenu() {
		if (showMenu) {
			setShowMenu(false);
		} else {
			setShowMenu(true);
		}
	}

	return (
		<div className="navbar">
			<div className="burger-menu">
				<i className="fas fa-bars" onClick={handleShowMenu}></i>
			</div>
			<div className="nav-main">
				<div className="logo">Josh Callarman</div>
				<hr className="rounded" />
				{!showMenu && (
					<div className="hide-links">
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/contact">Contact</Link>
					</div>
				)}
				{showMenu && (
					<div>
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/contact">Contact</Link>
					</div>
				)}
			</div>
			<div className="nav-right">
				<DarkModeButton />
			</div>
		</div>
	);
};

export default Navbar;
