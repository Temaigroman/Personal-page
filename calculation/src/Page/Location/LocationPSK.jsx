import { NavLink,  } from "react-router-dom";



const Location = () => {

  return (
    <div className="chose">
       <NavLink to="/region/PSK/PSKOV" className="chose__btn">Псков</NavLink>
       <NavLink to="/region/PSK/VL" className="chose__btn">Великие Луки</NavLink>
       <NavLink to="/region/PSK/OSTROV" className="chose__btn">Остров</NavLink>
       <NavLink to="/region/PSK/NEV" className="chose__btn">Невель</NavLink>
			 <NavLink to="/region/PSK/SUCHOVO" className="chose__btn">Сущево</NavLink>
       <NavLink to="/region/PSK/PORH" className="chose__btn">Порхов</NavLink>
       
	 
    </div>
  );
};

export default Location;