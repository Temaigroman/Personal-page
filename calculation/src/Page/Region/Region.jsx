import Region_component from "../../Сomponents/Region/Region_component";
import { regions } from "../../Lists/Region_list/regionList";

const Region = () => {
	return ( 
	<div className="chose">

		  {regions.map((region)=>{
			return <Region_component title={region.title}/>

			
		})}  
			
			
	</div>
);
}
 
export default Region;