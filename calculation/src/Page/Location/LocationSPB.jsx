import { NavLink,  } from "react-router-dom";



const Location = () => {

  return (
    <div className="chose">
       <NavLink to="/region/SPB/MP" className="chose__btn">Морской порт</NavLink>
       <NavLink to="/region/SPB/EKAT" className="chose__btn">Екатерингофка</NavLink>
       
      
    </div>
  );
};

export default Location;