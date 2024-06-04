import Main_component from "../../Сomponents/Main/Main_component";
import { locations } from "../../Lists/Location/locationListBR";
import { NavLink, useParams } from "react-router-dom";

const LocationBR = () => {
	return (
		<div className="chose">
			<NavLink to={`/BR`}>
				{locations.map((location, index) => {
					return <Main_component key={index} title={location.title} />


				})}
			</NavLink>
		</div>
	);
}

export default LocationBR;