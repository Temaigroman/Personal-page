import Main_component from "../../Сomponents/Main/Main_component";
import { regions } from "../../Lists/Region_list/regionList";

const Region = () => {
	return ( 
	<div className="chose">

		  {regions.map((region)=>{
			return <Main_component title={region.title}/>

			
		})}  
			
			
	</div>
);
}
 
export default Region;