import "./filtros.css";
import { useDispatch, useSelector} from "react-redux";
import { buscarPersonajesThunk} from "../../Redux/acciones/personajes.acciones";
import { FC } from "react";



interface FiltrosProps{
  enviarbusqueda: string, 
  handleBusqueda:(busqueda: string) =>{}
}

const Filtros: FC<FiltrosProps> = ({enviarbusqueda}: FiltrosProps) => {

  const busqueda = useSelector<any, any>(estado => estado.personajes.busqueda)

  const dispatch = useDispatch();
  const onChange = (e: { target: { value: string; }; }) => {
    const value = e.target.value;
    dispatch(buscarPersonajesThunk(value))
 }
 
 enviarbusqueda = busqueda

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        onChange={onChange}
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        value={busqueda}
      />
    </div>
  );
};

export default Filtros;
