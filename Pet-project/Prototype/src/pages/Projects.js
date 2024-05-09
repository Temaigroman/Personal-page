import Project from "../components/project/Project"
import { projects } from "../helpers/projectsList";

const Projects = () => {
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Projects</h2>
				<ul className="projects">
					{projects.map((project,index) => { //мы итерируем массив project(Компонент->Массив->элемент массива) методом мар (для каждого элемента проводим манипуляции,согласно заданной функции. И рендерим визуал Projects(это страница) в котором через props задана переменная,которавя для каждого объекта помле итерации уникальная.)
						return (
							<Project 
							key= {index} 
							title={project.title} 
							img={project.img} 
							index = {index}
							/>
						)
					})}
				</ul>
			</div>
		</main>
	);
}

export default Projects;