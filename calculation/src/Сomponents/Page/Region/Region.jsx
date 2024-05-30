import Region_component from "../../Сomponents/Region/Region_component";
import { region } from "../../Lists/Region_list/region_list";
const Region = () => {
	return ( 
	<div className="chose">
	<button className="chose__btn"> {region.map((region,index) => { //мы итерируем массив project(Компонент->Массив->элемент массива) методом мар (для каждого элемента проводим манипуляции,согласно заданной функции. И рендерим визуал Projects(это страница) в котором через props задана переменная,которавя для каждого объекта помле итерации уникальная.)
						return (
							<Region_component
							key= {index} 
							title={region.title} 
							index = {index}
							/>
						)
					})}
	</button>
	</div>
);
}
 
export default Region;