import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import{FC, useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux';
import { buscarPersonajesThunk } from "../../Redux/acciones/personajes.acciones";
import Personaje from "../../Redux/types/personajes.types";
import {IRootState} from "../../Redux/store/store"



/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */



const GrillaPersonajes: FC = () => {

  const dispatch = useDispatch();
  const {personajes, status, favoritos} = useSelector<IRootState, any>(
    (estado: IRootState) => estado.personajes);

  useEffect(() => {
    dispatch(buscarPersonajesThunk(''));
}, []);


if (status === "LOADING") return <div>Cargando personajes...</div>;
if (status === "ERROR") return <div>No se pudo cargar los personajes.</div>;
if (!personajes || personajes.length === 0) return <></>;

  return(
    <div className="grilla-personajes">
   {personajes.map((personaje: Personaje, index: number)=>{
      const isFavorited = () => favoritos.some((p: { id: number; }) => p.id === personaje.id)
    return <TarjetaPersonaje key={index} personaje={personaje} favorito={isFavorited()}/>
   })}
    </div>
      );
    };
   

export default GrillaPersonajes;
