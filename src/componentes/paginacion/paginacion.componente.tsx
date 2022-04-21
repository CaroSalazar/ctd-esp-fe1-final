import './paginacion.css';
import Personaje from '../../Redux/types/personajes.types';
import { FC } from 'react';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion: FC<{paginaActual: number, setPaginaActual: any, personajes: Personaje[]}> = ({paginaActual, setPaginaActual, personajes})=> {

    const paginasTotales = (personajes.length / 20)

    return <div className="paginacion">
        <button disabled={paginaActual === 1 ? true : false} className={"primary"} onClick={() => setPaginaActual(paginaActual - 1)}>Anterior</button>
        <button disabled={paginasTotales < 1 ? true : false} className={"primary"} onClick={() => setPaginaActual(paginaActual + 1)}>Siguiente</button>
    </div>
}

export default Paginacion;