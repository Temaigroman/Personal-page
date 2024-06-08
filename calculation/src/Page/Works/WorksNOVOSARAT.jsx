import { NavLink,  } from "react-router-dom";

const WorksNOVOSARAT = () => {

  return (
    <div className="chose">
      
      <NavLink to="/region/LO/NOVOSARAT/MASTER" className="chose__btn">Мастер</NavLink>
      <NavLink to="/region/LO/NOVOSARAT/CASSA" className="chose__btn">Оператор-кассир</NavLink>
    </div>
  );
};

export default WorksNOVOSARAT;