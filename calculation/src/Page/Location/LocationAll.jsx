import Main_component from "../../Сomponents/Main/Main_component";
import { locations } from "../../Lists/Location/locationListAll";
import { NavLink } from "react-router-dom";

{ console.log(locations.title) }
const LocationAll = () => {

	return (
		<div className="chose">
      <NavLink to={`/All`}> 
        {locations.map((location, index) => {
          return (
            <Main_component
              key={index}
              title={location.title}
              index={index}
             
            />
          );
        })}
      </NavLink>
    </div>
  );
};


export default LocationAll;