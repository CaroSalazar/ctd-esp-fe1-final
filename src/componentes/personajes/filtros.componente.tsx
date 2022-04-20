import "./filtros.css";
import { FC} from "react";
import { useDispatch} from "react-redux";
import { buscarPersonajesThunk} from "../../Redux/acciones/personajes.acciones";
import { useSelector } from "../../Redux/store/store";



const Filtros: FC = () => {

  // const busqueda = useSelector(estado => estado.personajes.busqueda);

  const dispatch = useDispatch();
  const onChange = (e: { target: { value: string; }; }) => {
    const value = e.target.value;
    dispatch(buscarPersonajesThunk(value))
 }
 
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        onChange={onChange}
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        // value={busqueda}
      />
    </div>
  );
};

export default Filtros;
