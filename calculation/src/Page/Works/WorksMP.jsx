import { NavLink,  } from "react-router-dom";

const WorksMP = () => {

  return (
    <div className="chose">
      <NavLink to="/region/SPB/MP/NL" className="chose__btn">Начальник участка</NavLink>
      <NavLink to="/region/SPB/MP/DOC" className="chose__btn">Специалист по документообороту</NavLink>
      <NavLink to="/region/SPB/MP/MASTER" className="chose__btn">Мастер</NavLink>
      <NavLink to="/region/SPB/MP/FUCHS" className="chose__btn">Водитель погрузчика</NavLink>
      <NavLink to="/region/SPB/MP/GAZ" className="chose__btn">Газорезчик</NavLink>
      <NavLink to="/region/SPB/MP/KASSA" className="chose__btn">Оператор-кассир</NavLink>
      <NavLink to="/region/SPB/MP/DRIVER" className="chose__btn">Водитель</NavLink>
	 
    </div>
  );
};

export default WorksMP;