
import Main_component from "../../Сomponents/Main/Main_component";
import { locations } from "../../Lists/Location/locationListSPB";
import { Link } from "react-router-dom";


const LocationSPB = ({index}) => {
	

	return ( 
		<div className="chose">
			  {locations.map((location, index)=>{
			return <Main_component 
			key={index} 
			title={location.title} 
			index={index}/>
			})}  	
		</div>
);
}
 
export default LocationSPB;