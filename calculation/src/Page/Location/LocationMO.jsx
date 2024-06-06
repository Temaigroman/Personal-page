import { NavLink,  } from "react-router-dom";



const Location = () => {

  return (
    <div className="chose">
       <NavLink to="/region/MO/POD" className="chose__btn">Подольск</NavLink>
       <NavLink to="/region/MO/ELECTRO" className="chose__btn">Электросталь</NavLink>
	 
    </div>
  );
};

export default Location;