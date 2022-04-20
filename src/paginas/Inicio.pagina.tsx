import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import {useDispatch} from "react-redux";
import {buscarPersonajesThunk
} from "../Redux/acciones/personajes.acciones";
 import {FC} from "react"
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio: FC = () => {

    
    const dispatch = useDispatch();

    const onclick = async() =>{
    dispatch(buscarPersonajesThunk(""))
}
    
    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={() => onclick()}>Limpiar Filtros</button> 
        </div>
        <Filtros/>
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio