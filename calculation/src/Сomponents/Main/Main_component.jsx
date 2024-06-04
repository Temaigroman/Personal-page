import { NavLink } from "react-router-dom";

const Main_component = ({ title, index, routeId }) => {
  
  return (
    <button className="chose__btn">{title}</button>
  );
}

export default Main_component;