import { NavLink,  } from "react-router-dom";

const WorksPOD = () => {

  return (
    <div className="chose">
      <NavLink to="/region/MO/POD/NL" className="chose__btn">Начальник участка</NavLink>
      <NavLink to="/region/MO/POD/MASTER" className="chose__btn">Мастер</NavLink>
      <NavLink to="/region/MO/POD/FUCHS" className="chose__btn">Водитель погрузчика</NavLink>
      <NavLink to="/region/MO/POD/DRIVER" className="chose__btn">Водитель</NavLink>
      <NavLink to="/region/MO/POD/CASSA" className="chose__btn">Оператор-кассир</NavLink>
      <NavLink to="/region/MO/POD/GAZ" className="chose__btn">Газорезчик</NavLink>
	 
    </div>
  );
};

export default WorksPOD;