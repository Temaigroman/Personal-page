import "./navbar_styel.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return ( 
	<header className="nav">
		<NavLink to='/' className="nav__waypoint">Главная страница</NavLink>
		<NavLink to='/region/All' className="nav__waypoint">Участки</NavLink>
		<NavLink to='/' className="nav__waypoint">Должность</NavLink>
</header> );
}
 
export default Navbar;