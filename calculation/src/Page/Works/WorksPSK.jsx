import { NavLink,  } from "react-router-dom";

const WorksPSK = () => {

  return (
    <div className="chose">
      <NavLink to="/region/PSK/PSKOV/NL" className="chose__btn">Начальник участка</NavLink>
      <NavLink to="/region/PSK/PSKOV/FUCHS" className="chose__btn">Водитель погрузчика</NavLink>
      <NavLink to="/region/PSK/PSKOV/CASS" className="chose__btn">Оператор-кассир</NavLink>
      <NavLink to="/region/PSK/PSKOV/GPK" className="chose__btn">Машинист крана ГПК-5</NavLink>
      <NavLink to="/region/PSK/PSKOV/GAZ" className="chose__btn">Газорезчик</NavLink>
      
    </div>
  );
};

export default WorksPSK;