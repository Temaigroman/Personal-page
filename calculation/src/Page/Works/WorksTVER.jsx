import { NavLink,  } from "react-router-dom";

const WorksTVER = () => {

  return (
    <div className="chose">
      <NavLink to="/region/TO/TVER/NL" className="chose__btn">Начальник участка</NavLink>
      <NavLink to="/region/TO/TVER/FUCHS" className="chose__btn">Водитель погрузчика</NavLink>
      <NavLink to="/region/TO/TVER/CASSA" className="chose__btn">Оператор-кассир</NavLink>
      <NavLink to="/region/TO/TVER/GAZ" className="chose__btn">Газорезчик</NavLink>
    </div>
  );
};

export default WorksTVER;