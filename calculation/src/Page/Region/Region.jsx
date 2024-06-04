import { NavLink, useParams } from "react-router-dom";
import Main_component from "../../Сomponents/Main/Main_component";
import { locations } from "../../Lists/Location/locationListRegions";

const Region = () => {
  const { id } = useParams();
  console.log({id});
  return (
    <div className="chose">
      <NavLink to={`/region/${id}`}> 
        {locations.map((location, index) => {
          return (
            <Main_component
              key={index}
              title={location.titleLocation}
              index={index}
              routeId={id}
            />
          );
        })}
      </NavLink>
    </div>
  );
};

export default Region;
