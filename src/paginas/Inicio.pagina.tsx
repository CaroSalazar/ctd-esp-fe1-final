import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import {useDispatch} from "react-redux";
import { buscarPersonajesThunk
} from "../Redux/acciones/personajes.acciones";
 import {FC, useState, useEffect} from "react"
import {useSelector} from "../Redux/store/store"
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */


const PaginaInicio: FC = () => {

    const { personajes, busqueda } = useSelector((estado) => estado.personajes);
    const [pagina, setPagina] = useState(1);
    const dispatch = useDispatch();
    
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