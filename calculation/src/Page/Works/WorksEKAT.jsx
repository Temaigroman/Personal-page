import { NavLink,  } from "react-router-dom";

const WorksEKAT = () => {

  return (
    <div className="chose">
      
      <NavLink to="/region/LO/EKAT/MASTER" className="chose__btn">Мастер</NavLink>
      <NavLink to="/region/LO/EKAT/KASSA" className="chose__btn">Оператор-кассир</NavLink>
    
	 
    </div>
  );
};

export default WorksEKAT;