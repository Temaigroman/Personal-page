import { NavLink } from "react-router-dom";
import Main_component from "../../Сomponents/Main/Main_component";
import { locations } from "../../Lists/Location/locationListSPB";



const Location = ({index}) => {
	

	return ( 
		<div className="chose">
			<NavLink to='/region/SPB'>
			  {locations.map((location, index)=>{
			return <Main_component 
			key={index} 
			title={location.title} 
			index={index}/>
			})}  
			</NavLink>	
		</div>
);
}
 
export default Location;