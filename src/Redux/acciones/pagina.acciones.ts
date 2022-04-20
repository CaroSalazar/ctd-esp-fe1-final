import { Action, ActionCreator } from '@reduxjs/toolkit';

export interface paginaSiguienteAction extends Action {
    type: "SIGUIENTE_PAGINA",
}

export interface paginaAnteriorAction extends Action {
    type: "ANTERIOR_PAGINA"
}

export interface ResetearPaginaAction extends Action {
    type: "RESETEAR_PAGINAS"
}


export type PaginaAction = paginaSiguienteAction | paginaAnteriorAction | ResetearPaginaAction;

export const paginaSiguiente: ActionCreator<paginaSiguienteAction> = () => {
    return {
        type: "SIGUIENTE_PAGINA",
    }
}

export const paginaAnterior: ActionCreator<paginaAnteriorAction> = () => {
    return {
        type: "ANTERIOR_PAGINA",
    }
}

export const resetearPagina: ActionCreator<ResetearPaginaAction> = () => {
    return {
        type: "RESETEAR_PAGINAS",
    }
}

// export const buscarPersonajesPorPaginaThunk = (
//     pagina: number
//   ): buscarPersonajesPorPaginaThunkAction => {
//     return async (dispatch, getState) => {
//       if (name.length > 2 || name.length === 0) {
//         dispatch(buscarPersonajes(name));
//         try {
//           const respuesta = await buscarPersonajesPorNombre(name);
//           dispatch(BuscarPersonajesSuccess(respuesta.personajes));
//         } catch (error) {
//           dispatch(buscarPersonajesError(error));
//         }
//       }
//     };
//   };
  