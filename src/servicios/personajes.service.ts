import Personaje from "../Redux/types/personajes.types";


export const buscarPersonajesAPI = async (
    name?: string,
    page?: number
): Promise<Personaje[]> => {
  let params = `?page=${page ? page : 1}`;
  if (name) {
    params += `&name=${name}`;
  }
  return fetch(`https://rickandmortyapi.com/api/character/${params}`)
    .then((data) => data.json())
    .then((data) => data.results);
};

