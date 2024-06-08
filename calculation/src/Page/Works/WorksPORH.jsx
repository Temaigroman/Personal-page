import { NavLink,  } from "react-router-dom";

const WorksPORH = () => {

  return (
    <div className="chose">
      <NavLink to="/region/PSK/PORH/NL" className="chose__btn">Начальник участка</NavLink>
      <NavLink to="/region/PSK/PORH/SORT" className="chose__btn">Сортировщик-сборщик</NavLink>
	 
    </div>
  );
};

export default WorksPORH;