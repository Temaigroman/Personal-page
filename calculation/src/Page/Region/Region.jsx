import Main_component from "../../Сomponents/Main/Main_component";
import { regions } from "../../Lists/Region_list/regionList";
import { NavLink, useParams } from "react-router-dom";


const Region = () => {
  const {id} = useParams();
	
  return (
    <div className="chose">
      {regions.map((region, index) => {
      
        if (region.id === parseInt(id, 10)) {
          return (
            <NavLink to={`/region/${region.id}`}>
              <Main_component
                key={index}
                title={region.title}
                index={index}
              />
            </NavLink>
          );
        }
        return null; // Если регион не соответствует, возвращаем пустой элемент
      })}
    </div>
  );
};

export default Region;




