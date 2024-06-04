import { NavLink } from "react-router-dom";

const Main_component = (title, index, routeId) => {
	const url = `/region/SPB/${routeId}`;
	return (

		<NavLink to= {url}><button className="chose__btn">{title}</button></NavLink>

	);
}

export default Main_component;

