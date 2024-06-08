import { NavLink,  } from "react-router-dom";

const WorksVOLH = () => {

  return (
    <div className="chose">
      <NavLink to="/region/LO/VOLH/NL" className="chose__btn">Начальник участка</NavLink>
      <NavLink to="/region/LO/VOLH/MASTER" className="chose__btn">Мастер</NavLink>
      <NavLink to="/region/LO/VOLH/FUCHS" className="chose__btn">Водитель погрузчика</NavLink>
      <NavLink to="/region/LO/VOLH/CASSA" className="chose__btn">Оператор-кассир</NavLink>
      <NavLink to="/region/LO/VOLH/GAZ" className="chose__btn">Газорезчик</NavLink>
	 
    </div>
  );
};

export default WorksVOLH;