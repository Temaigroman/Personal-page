import { useParams } from "react-router-dom"
import { region } from "../../Lists/Region_list/region_list";


const Region_component = () => {
	const { id } = useParams();
	const project = region[id];
	return (
		<div className="chose">
					<button className="chose__btn">{project.title}</button>
		</div>
		
		
	);
}

export default Region_component;