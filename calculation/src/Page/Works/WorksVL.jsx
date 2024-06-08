import { NavLink,  } from "react-router-dom";

const WorksVL = () => {

  return (
    <div className="chose">
      <NavLink to="/region/PSK/VL/NL" className="chose__btn">Начальник участка</NavLink>
      <NavLink to="/region/PSK/VL/FUCHS" className="chose__btn">Водитель погрузчика</NavLink>
      <NavLink to="/region/PSK/VL/CASSA" className="chose__btn">Оператор-кассир</NavLink>
      <NavLink to="/region/PSK/VL/GAZ" className="chose__btn">Газорезчик</NavLink>
    </div>
  );
};

export default WorksVL;