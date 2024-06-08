import { NavLink,  } from "react-router-dom";

const WorksVIBO = () => {

  return (
    <div className="chose">
      
      <NavLink to="/region/LO/VIBO/MASTER" className="chose__btn">Мастер</NavLink>
      <NavLink to="/region/LO/VIBO/CASSA" className="chose__btn">Оператор-кассир</NavLink>
    </div>
  );
};

export default WorksVIBO;