import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Main_component from "../../Сomponents/Main/Main_component";
import { locations } from "../../Lists/Location/locationListTO";

const LocationTO = () => {
	const {id}=useParams();
	return (
		<NavLink to = {`/${id}`}className="chose">
			 
		  {locations.map((location, index)=>{
			return <Main_component key={index} title={location.title}/>

			
		})}  
						
						</NavLink> 
);
}
 
export default LocationTO;