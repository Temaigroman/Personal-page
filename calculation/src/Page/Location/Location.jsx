import Main_component from "../../Сomponents/Main/Main_component";
import { locations } from "../../Lists/Location/locationList";

const Location = () => {
	return ( 
	<div className="chose">

		  {locations.map((location)=>{
			return <Main_component title={location.title}/>

			
		})}  
						
	</div>
);
}
 
export default Location;