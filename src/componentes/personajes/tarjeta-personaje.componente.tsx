import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import Personaje from "../../Redux/types/personajes.types"
import {FC, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {IRootState} from "../../Redux/store/store"
import {agregarFavorito, eliminarFavorito}  from "../../Redux/acciones/personajes.acciones"

/**
 * Componente que renderiza una Tarjeta para cada personaje dentro de la grilla de personajes. 
 * @author Carolina Salazar
 * @param {Personaje} personaje
 * @param {boolean} favorito
 * @returns {JSX element} 
 */



 interface TarjetaPersonajeProps {
    personaje: Personaje;
    favorito: boolean;
   
}
const TarjetaPersonaje: FC<TarjetaPersonajeProps> = ({personaje, favorito}:TarjetaPersonajeProps) => {

  const  {favoritos}  = useSelector<IRootState, any>(estado => estado.personajes);

  const dispatch = useDispatch();
  useEffect(() => {
    favoritos.includes(personaje);
  });


    /**
     * Función que se dispara al clickear el botonFavorito. 
     * Si el personaje esta marcado como favorito, despacha la acción para eliminarlo del array de favoritos.
     * Y si el personaje no esta como favorito, despacha la acción para agregarlo. 
     * @author Carolina Salazar
     */

  const handleClick = (personaje: Personaje) => {
    if (favoritos.includes(personaje)) {
      dispatch(eliminarFavorito(personaje));
    } else {
      dispatch(agregarFavorito(personaje));
    }
  };

  
    return(
<div className="tarjeta-personaje" key={"personaje_" + personaje.id}>
        <img src={personaje.image} alt={personaje.name}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito esFavorito={favorito} onClick={() => {
            handleClick(personaje);
          }}/>
        </div>
    </div>
    ) 
    }

export default TarjetaPersonaje;