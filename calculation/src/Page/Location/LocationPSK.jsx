import Main_component from "../../Сomponents/Main/Main_component";
import { locations } from "../../Lists/Location/locationListPSK";

const LocationPSK = () => {
	return ( 
	<div className="chose">

		  {locations.map((location, index)=>{
			return <Main_component key={index} title={location.title}/>

			
		})}  
						
	</div>
);
}
 
export default LocationPSK;