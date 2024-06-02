
import Main_component from "../../Сomponents/Main/Main_component";
import { locations } from "../../Lists/Location/locationListRegions";
import { NavLink } from "react-router-dom";
const Region = () => {

  return ( 
    <div className="chose">
  
    <button class="chose__btn"><NavLink to='/region/SPB'> Санкт-Петербург</NavLink></button>
    
		<button class="chose__btn"> <NavLink to='/region/LO'> Ленинградская область</NavLink></button>
		<button class="chose__btn"> <NavLink to='/region/PSK'> Псковская область</NavLink></button>
		<button class="chose__btn"> <NavLink to='/region/NO'> Новогородская область</NavLink></button>
		<button class="chose__btn"> <NavLink to='/region/SO'> Смоленская область</NavLink></button>
		<button class="chose__btn"> <NavLink to='/region/BR'> Брянская область</NavLink></button>
		<button class="chose__btn"> <NavLink to='/region/MO'> Московская область</NavLink></button>
		<button class="chose__btn"> <NavLink to='/region/TO'> Тверская область</NavLink></button>
              
    </div>
  );
  }
   


  export default Region;




