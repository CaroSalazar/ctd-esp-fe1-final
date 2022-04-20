import { Reducer } from "@reduxjs/toolkit";
import { PaginaAction } from "../acciones/pagina.acciones";

export interface EstadoPaginas {
  pagina: number;
}

const estadoInicial: EstadoPaginas = {
  pagina: 0,
};

export const paginaReductora: Reducer<EstadoPaginas, PaginaAction> = (
  estado = estadoInicial,
  action
): EstadoPaginas => {
  switch (action.type) {
    case "SIGUIENTE_PAGINA":
      return {
        ...estado,
        pagina: estado.pagina + 1,
      };
    case "ANTERIOR_PAGINA":
      return {
        ...estado,
        pagina: estado.pagina - 1,
      };
    case "RESETEAR_PAGINAS":
      return {
        ...estado,
        pagina: 0,
      };
    default:
      return estado;
  }
};
