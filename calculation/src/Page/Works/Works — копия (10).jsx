import Main_component from "../../Сomponents/Main/Main_component";
import { works } from "../../Lists/Works/worksList";

const Works = () => {
	return ( 
	<div className="chose">

		  {works.map((works, index)=>{
			return <Main_component  key={index} title={works.title}/>

			
		})}  
						
	</div>
);
}
 
export default Works;