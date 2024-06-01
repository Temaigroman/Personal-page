import Main_component from "../../Сomponents/Main/Main_component";
import { regions } from "../../Lists/Region_list/regionList";
import { NavLink } from "react-router-dom";

const Region = () => {
	return (
		<div className="chose">

			{regions.map((region, index) => {
				return <Main_component key={index} title={region.title} />

			})}


		</div>
	);
}

export default Region;