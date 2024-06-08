import { NavLink,  } from "react-router-dom";

const WorksBR = () => {

  return (
    <div className="chose">
      <NavLink to="/region/BR/BR-1/NL" className="chose__btn">Начальник участка</NavLink>
      <NavLink to="/region/BR/BR-1/FUCHS" className="chose__btn">Водитель погрузчика</NavLink>
      <NavLink to="/region/BR/BR-1/CASSA" className="chose__btn">Оператор-кассир</NavLink>
      <NavLink to="/region/BR/BR-1/GAZ" className="chose__btn">Газорезчик</NavLink>
      <NavLink to="/region/BR/BR-1/MASTER" className="chose__btn">Мастер</NavLink>
      
    </div>
  );
};

export default WorksBR;