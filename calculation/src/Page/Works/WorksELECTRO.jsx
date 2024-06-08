import { NavLink,  } from "react-router-dom";

const WorksELECTRO = () => {

  return (
    <div className="chose">
      <NavLink to="/region/MO/ELECTRO/NL" className="chose__btn">Начальник участка</NavLink>
      <NavLink to="/region/MO/ELECTRO/FUCHS" className="chose__btn">Водитель погрузчика</NavLink>
      <NavLink to="/region/MO/ELECTRO/GAZ" className="chose__btn">Газорезчик</NavLink>
    </div>
  );
};

export default WorksELECTRO;