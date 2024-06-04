import { NavLink, useParams } from "react-router-dom";
import Main_component from "../../Сomponents/Main/Main\_component";
import { locations } from "../../Lists/Location/locationListSPB";

const Location = () => {
  const { id } = useParams(); // Получаем параметр пути из URL
  const locationIndex = parseInt(id, 10) - 1; // Преобразуем строку в число и вычитаем 1, так как индексация начинается с 0

  return (
    <div className="chose">
      <NavLink to={`/region/SPB/${id}`}> // Указываем путь с параметром id
        {locations.map((location, index) => {
          return (
            <Main_component
              key={index}
              title={location.title}
              index={index}
              routeId={id} // Передаем идентификатор маршрута в компонент
            />
          );
        })}
      </NavLink>
    </div>
  );
};

export default Location;