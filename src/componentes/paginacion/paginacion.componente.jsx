import { useDispatch } from 'react-redux';
import './paginacion.css';
import { paginaAnterior, paginaSiguiente } from '../../Redux/acciones/pagina.acciones';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {

    const dispath = useDispatch();

    return <div className="paginacion">
        <button disabled={true} className={"primary"} onClick={() => dispath(paginaSiguiente())}>Anterior</button>
        <button disabled={false} className={"primary"} onClick={() => dispath(paginaAnterior())}>Siguiente</button>
    </div>
}

export default Paginacion;