import { NavLink,  } from "react-router-dom";

const WorksBR2 = () => {

  return (
    <div className="chose">
           <NavLink to="/region/BR/BR-2/MASTER" className="chose__btn">Мастер</NavLink>
      <NavLink to="/region/BR/BR-2/FUCHS" className="chose__btn">Водитель погрузчика</NavLink>
      <NavLink to="/region/BR/BR-2/GAZ" className="chose__btn">Газорезчик</NavLink>
    </div>
  );
};

export default WorksBR2;