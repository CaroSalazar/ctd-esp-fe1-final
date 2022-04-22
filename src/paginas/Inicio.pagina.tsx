import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import {useDispatch} from "react-redux";
import { buscarPersonajesThunk
} from "../Redux/acciones/personajes.acciones";
 import {FC, useState, useEffect} from "react"
import {useSelector} from "../Redux/store/store"
/**
 * Pagina principal donde se visualiza el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * @author Carolina Salazar
 * @returns la pagina de inicio
 */


const PaginaInicio: FC = () => {

    const { personajes, busqueda } = useSelector((estado) => estado.personajes);
    const [pagina, setPagina] = useState(1);
    const dispatch = useDispatch();
    
    /**
     * Función que se ejecuta cuando clickeamos el boton limpiar Filtro.
     * La misma despacha una accion que renderiza los primeros 20 personajes de la api.
     * Y una segunda acción que cambia el valor de la propiedad 
     * 'búsqueda' del estado global a un string vacío.  
     * @author Carolina Salazar
     */ 

    const limpiarFiltro = async () => {
        setPagina(1);
        dispatch(buscarPersonajesThunk("")) 
    }
    const handleBusqueda = async (busqueda: string) =>{
        dispatch(buscarPersonajesThunk(busqueda))
    }
    useEffect(() => {
        dispatch(buscarPersonajesThunk(busqueda, pagina));
      }, [dispatch, pagina]);
    
    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={() => limpiarFiltro()}>Limpiar Filtros</button> 
        </div>
        <Filtros enviarbusqueda={busqueda} handleBusqueda={handleBusqueda}/>
        <Paginacion paginaActual={pagina} setPaginaActual={setPagina} personajes={personajes}/>
      <GrillaPersonajes/> 
      <Paginacion paginaActual={pagina} setPaginaActual={setPagina} personajes={personajes}/>
    </div>
}

export default PaginaInicio