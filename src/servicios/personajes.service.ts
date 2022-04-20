import Respuesta from "../Redux/types/respuesta.type";

export const buscarPersonajesPorNombre = async (name?: string): Promise<Respuesta> => {
    let params = "?"
    if (name){
        params += `name=${name}`
    }
    return fetch(`https://rickandmortyapi.com/api/character/${params}`)
    .then(response => response.json())
    .then(data => {
        return {
            personajes: data.results,
            siguientePagina: data.info.next || ""
        }
    });
};

export const buscarPersonajesPorPagina = async (pagina: string): Promise<Respuesta> => {
    return fetch(pagina)
        .then(response => response.json())
        .then(data => {
            return {
                personajes: data.results,
                siguientePagina: data.info.next || ""
            }
        });
};


