import { NavLink,  } from "react-router-dom";

const WorksKOLP = () => {

  return (
    <div className="chose">
      <NavLink to="/region/LO/KOLP/NL" className="chose__btn">Начальник участка</NavLink>
      <NavLink to="/region/LO/KOLP/MASTER" className="chose__btn">Мастер</NavLink>
      <NavLink to="/region/LO/KOLP/FUCHS" className="chose__btn">Водитель погрузчика</NavLink>
      <NavLink to="/region/LO/KOLP/CASSA" className="chose__btn">Оператор-кассир</NavLink>
      <NavLink to="/region/LO/KOLP/GAZ" className="chose__btn">Водитель</NavLink>
     
    </div>
  );
};

export default WorksKOLP;