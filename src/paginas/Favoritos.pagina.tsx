import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import {useSelector } from "react-redux"
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente"
import {useDispatch} from "react-redux"
import {eliminarTodosFavoritos} from "../Redux/acciones/personajes.acciones";
import {FC} from "react"
import Personaje from "../Redux/types/personajes.types"
import {IRootState} from "../Redux/store/store"
/**
 * Pagina de favoritos. Donde se visualizan todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * @author Carolina Salazar 
 * @returns la pagina de favoritos
 */

const PaginaFavoritos:FC = () => {

  const dispatch = useDispatch();
  const  {favoritos}  = useSelector<IRootState, any>(estado => estado.personajes);
 
   /**
     * Función que se ejecuta cuando clickeamos el boton Eliminar favoritos.
     * La misma despacha una accion que elimina todos los personajes que estan marcados como favoritos.
     *  
     * @author Carolina Salazar
     */ 
  const eliminarFavoritos = () =>{
    dispatch(eliminarTodosFavoritos())
  }

  if (favoritos.length === 0)
    return (<div style={{color:"black", textAlign:"center", marginTop:"50px"}}>No tienes favoritos aún</div>)
 

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={() => eliminarFavoritos()}>Eliminar favoritos</button>
        </div>
   
        <div className="grilla-personajes">
        {favoritos.map((personaje: Personaje, index:number) => {
          return <TarjetaPersonaje key={index} personaje={personaje} favorito={true}/>;
        })}
      </div> 
    </div>
}

export default PaginaFavoritos;