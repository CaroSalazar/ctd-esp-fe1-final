import Personaje from "../types/personajes.types";
// import Pagina from "../types/pagina.type";
import { PersonajeAction } from "../acciones/personajes.acciones";

export interface EstadoPersonajes {
  busqueda: string;
  personajes: Personaje[] | [];
  favoritos: Personaje[] | [];
  // paginas: Pagina[];
  siguientePagina: string;
  status: "LOADING" | "SUCCESS" | "ERROR";
  error: string | null;
}

const estadoInicial: EstadoPersonajes = {
  busqueda: "",
  personajes: [],
  favoritos: [],
  // paginas: [],
  siguientePagina: "",
  status: "SUCCESS",
  error: null,
};

const personajesReductora = (
  estado: EstadoPersonajes = estadoInicial,
  action: PersonajeAction
) => {
  switch (action.type) {
    case "BUSCAR_PERSONAJES":
      return {
        ...estado,
        busqueda: action.payload.name,
        status: "LOADING",
        error: null,
      };
    case "BUSCAR_PERSONAJES_SUCCESS":
      return {
        ...estado,
        personajes: action.payload.personajes,
        status: "SUCCESS",
      };
    case "BUSCAR_PERSONAJES_ERROR":
      return {
        ...estado,
        personajes: [],
        status: "ERROR",
        error: action.payload.error,
      };
      case "AGREGAR_FAVORITO":
        return {
            ...estado,
            favoritos: [...estado.favoritos.filter(personajes => personajes.id !== action.payload.personaje.id),
            action.payload.personaje]
        }
    case "ELIMINAR_FAVORITO":
        return {
            ...estado,
            favoritos: [...estado.favoritos.filter(personajes => personajes.id !== action.payload.personaje.id)]
        }
      case "ELIMINAR_TODOS_FAVORITOS":
        return{
          ...estado,
          favoritos:[]
        }
    default:
    return estado;
  }
};
export default personajesReductora;