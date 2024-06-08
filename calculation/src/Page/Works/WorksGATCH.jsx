import { NavLink,  } from "react-router-dom";

const WorksGATCH = () => {

  return (
    <div className="chose">
      
    <NavLink to="/region/LO/GATCH/MASTER" className="chose__btn">Мастер</NavLink>
    <NavLink to="/region/LO/GATCH/KASSA" className="chose__btn">Оператор-кассир</NavLink>
  
 
  </div>
  );
};

export default WorksGATCH;