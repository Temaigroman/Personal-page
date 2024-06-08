import { NavLink,  } from "react-router-dom";

const WorksSMOL = () => {

  return (
    <div className="chose">
      <NavLink to="/region/SO/SMOL/NL" className="chose__btn">Начальник участка</NavLink>
      <NavLink to="/region/SO/SMOL/MASTER" className="chose__btn">Мастер</NavLink>
      <NavLink to="/region/SO/SMOL/FUCHS" className="chose__btn">Водитель погрузчика</NavLink>
      <NavLink to="/region/SO/SMOL/CASSA" className="chose__btn">Оператор-кассир</NavLink>
      <NavLink to="/region/SO/SMOL/GAZ" className="chose__btn">Газорезчик</NavLink>
      
    </div>
  );
};

export default WorksSMOL;