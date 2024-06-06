import { NavLink,  } from "react-router-dom";

const Location = () => {

  return (
    <div className="chose">
      <NavLink to="/region/BR/BR-1" className="chose__btn">Брянск-1</NavLink>
      <NavLink to="/region/BR/BR-2" className="chose__btn">Брянск-2</NavLink>
	 
    </div>
  );
};

export default Location;