import { NavLink,  } from "react-router-dom";

const Location = () => {

  return (
    <div className="chose">
      <NavLink to="/region/SPB/MP/NL" className="chose__btn">Начальник участка</NavLink>
      <NavLink to="/region/SPB/MP/MASTER" className="chose__btn">Мастер</NavLink>
	 
    </div>
  );
};

export default Location;