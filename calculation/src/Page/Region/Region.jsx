import { NavLink,  } from "react-router-dom";


const Region = () => {
 
  
  return (
    <div className="chose">
       <NavLink to="/region/SPB" className="chose__btn">Санкт-Петербург</NavLink>
       <NavLink to="/region/LO" className="chose__btn">Ленинградская область</NavLink>
       <NavLink to="/region/PSK" className="chose__btn">Псковская область</NavLink>
       <NavLink to="/region/NO" className="chose__btn">Новгородская область</NavLink>
       <NavLink to="/region/TO" className="chose__btn">Тверская область</NavLink>
       <NavLink to="/region/BR" className="chose__btn">Брянская область</NavLink>
       <NavLink to="/region/SO" className="chose__btn">Смоленская область</NavLink>
       <NavLink to="/region/MO" className="chose__btn">Московская область</NavLink>
      
    </div>
  );
};

export default Region;
