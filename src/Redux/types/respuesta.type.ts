import Personaje from "./personajes.types";


interface Respuesta {
    personajes: Personaje[];
    siguientePagina: string;
}

export default Respuesta;