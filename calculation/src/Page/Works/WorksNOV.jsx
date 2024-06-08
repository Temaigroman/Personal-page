import { NavLink,  } from "react-router-dom";

const WorksNOV = () => {

  return (
    <div className="chose">
      <NavLink to="/region/NO/NOV/NL" className="chose__btn">Начальник участка</NavLink>
      <NavLink to="/region/NO/NOV/FUCHS" className="chose__btn">Водитель погрузчика</NavLink>
      <NavLink to="/region/NO/NOV/GAZ" className="chose__btn">Газорезчик</NavLink>
    </div>
  );
};

export default WorksNOV;