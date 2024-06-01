import Main_component from "../../Сomponents/Main/Main_component";
import { regions } from "../../Lists/Region_list/regionList";

const Region = () => {
		
	return (
			<div className="chose">
			{regions.map((region, index) => {
				return <Main_component 
				key={index} 
				title={region.title} 
				index={index} 
				/>
			})}


		</div>
	);
}

export default Region;