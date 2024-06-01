import { useParams } from "react-router-dom";
import Main_component from "../../Сomponents/Main/Main_component";
import { locations } from "../../Lists/Location/locationListSPB";
import { NavLink } from "react-router-dom";


const LocationSPB = ({index}) => {
	const {id}=useParams();
	 /* const  = locations[id]; */ 

	return ( 
		<NavLink to={`/${id}`} className="chose">
			  {locations.map((location, index)=>{
			return <Main_component key={index} title={location.title} index={index}/>
			})}  	
		</NavLink>
);
}
 
export default LocationSPB;