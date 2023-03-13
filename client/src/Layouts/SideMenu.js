import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    const [ navbar, setNavbar ] = useState(false);
    const showNavbar = () => {
        setNavbar(!navbar)
    }

    return (
        <div id="side-menu" className="site-side-menu">
            <div className="navbar">
                <Link to="#" onClick={ showNavbar} className="menu-bars">
                    =
                </Link>
            </div>
            <nav className={ navbar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={ showNavbar }>
                    <li className="nav-text"><Link to="#" className="menu-bars">X</Link></li>
                    <li className="nav-text"><Link to={"/"}>Home</Link></li>
                    <li className="nav-text"><Link to={"profile"}>Profile</Link></li>
                    <li className="nav-text"><Link to={"project-group"}>Project Group</Link></li>
                    <li className="nav-text"><Link to={"calendar"}>Calendar</Link></li>
                    <li className="nav-text"><Link to={"deliverables"}>Deliverables</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default SideMenu;