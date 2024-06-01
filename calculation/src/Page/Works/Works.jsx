import Main_component from "../../Сomponents/Main/Main_component";
import { works } from "../../Lists/Works/worksList";

const Works = () => {
	return ( 
	<div className="chose">

		  {works.map((works)=>{
			return <Main_component title={works.title}/>

			
		})}  
						
	</div>
);
}
 
export default Works;