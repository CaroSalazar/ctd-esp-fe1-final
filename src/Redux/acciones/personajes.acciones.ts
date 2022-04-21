import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { buscarPersonajesAPI } from "../../servicios/personajes.service";
import { IRootState } from "../store/store";
import Personaje from "../types/personajes.types";

export interface BuscarPersonajesAction extends Action {
  type: "BUSCAR_PERSONAJES";
  payload: {
    name: string;
  };
}

export const buscarPersonajes: ActionCreator<BuscarPersonajesAction> = (
  name: string
) => {
  return {
    type: "BUSCAR_PERSONAJES",
    payload: {
      name: name,
    },
  };
};

export interface BuscarPersonajesSuccessAction extends Action {
  type: "BUSCAR_PERSONAJES_SUCCESS";
  payload: {
    personajes: Personaje[];
  };
}

const BuscarPersonajesSuccess: ActionCreator<BuscarPersonajesSuccessAction> = (
  personajes: Personaje[]
) => {
  return {
    type: "BUSCAR_PERSONAJES_SUCCESS",
    payload: {
      personajes: personajes,
    },
  };
};

export interface BuscarPersonajesErrorAction extends Action {
  type: "BUSCAR_PERSONAJES_ERROR";
  payload: {
    error: string;
  };
}

const buscarPersonajesError: ActionCreator<BuscarPersonajesErrorAction> = (
  error: string
) => {
  return {
    type: "BUSCAR_PERSONAJES_ERROR",
    payload: {
      error: error,
    },
  };
};

export interface AgregarFavoritoAction extends Action {
  type: "AGREGAR_FAVORITO";
  payload: { personaje: Personaje };
}
export const agregarFavorito: ActionCreator<AgregarFavoritoAction> = (
  personaje: Personaje
): AgregarFavoritoAction => {
  return {
    type: "AGREGAR_FAVORITO",
    payload: {
      personaje,
    },
  };
};

export interface EliminarFavoritoAction extends Action {
  type: "ELIMINAR_FAVORITO";
  payload: { personaje: Personaje };
}

export const eliminarFavorito: ActionCreator<EliminarFavoritoAction> = (
  personaje: Personaje
): EliminarFavoritoAction => {
  return {
    type: "ELIMINAR_FAVORITO",
    payload: {
      personaje,
    },
  };
};

export interface EliminarTodosFavoritosAction extends Action {
  type: "ELIMINAR_TODOS_FAVORITOS";
  payload: { personaje: Personaje };
}

export const eliminarTodosFavoritos: ActionCreator<
  EliminarTodosFavoritosAction
> = (personaje: Personaje): EliminarTodosFavoritosAction => {
  return {
    type: "ELIMINAR_TODOS_FAVORITOS",
    payload: {
      personaje,
    },
  };
};

export type PersonajeAction =
  | ReturnType<typeof buscarPersonajes>
  | ReturnType<typeof BuscarPersonajesSuccess>
  | ReturnType<typeof buscarPersonajesError>
  | ReturnType<typeof agregarFavorito>
  | ReturnType<typeof eliminarFavorito>
  | ReturnType<typeof eliminarTodosFavoritos>

interface BuscarPersonajesThunkAction
  extends ThunkAction<void, IRootState, unknown, PersonajeAction> {}

export const buscarPersonajesThunk = (
  name: string,
  page?: number
): BuscarPersonajesThunkAction => {
  return async (dispatch) => {
      dispatch(buscarPersonajes(name));
      try {
        const respuesta = await buscarPersonajesAPI(name, page);
        dispatch(BuscarPersonajesSuccess(respuesta));
      } catch (error) {
        dispatch(buscarPersonajesError(error));
      }
    }
  };
