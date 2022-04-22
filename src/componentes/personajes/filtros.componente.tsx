import "./filtros.css";
import { useDispatch, useSelector} from "react-redux";
import { buscarPersonajesThunk} from "../../Redux/acciones/personajes.acciones";
import { FC } from "react";

/**
 * Componente que renderiza el input para filtrar la busqueda de personajes
 * @author Carolina Salazar
 * @returns {JSX.Element}
 */


interface FiltrosProps{
  enviarbusqueda: string, 
  handleBusqueda:(busqueda: string) =>{}
}

const Filtros: FC<FiltrosProps> = ({enviarbusqueda}: FiltrosProps) => {

  const busqueda = useSelector<any, any>(estado => estado.personajes.busqueda)

  const dispatch = useDispatch();

  /**
     * Función que despacha 1 accion cuando se produce un cambio en el valor del input. 
     * La acción trae los personajes que coincidan con el valor que recibe por
     * parámetro
     * 
     * @author Carolina Salazar
     * @param {Event} e
     * @param {string} value
     */
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
