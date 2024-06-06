import { NavLink,  } from "react-router-dom";



const Location = () => {

  return (
    <div className="chose">
       <NavLink to="/region/LO/KOLP" className="chose__btn">Колпино</NavLink>
       <NavLink to="/region/LO/VOLH" className="chose__btn">Волхонка</NavLink>
			 <NavLink to="/region/LO/SHUS" className="chose__btn">Шушары</NavLink>
       <NavLink to="/region/LO/PISK" className="chose__btn">Пискаревка</NavLink>
			 <NavLink to="/region/LO/PARNAS" className="chose__btn">Парнас</NavLink>
       <NavLink to="/region/LO/VIBO" className="chose__btn">Выборг</NavLink>
       <NavLink to="/region/LO/GATCH" className="chose__btn">Гатчина</NavLink>
			 <NavLink to="/region/LO/TOS" className="chose__btn">Тосно</NavLink>
			 
    </div>
  );
};

export default Location;