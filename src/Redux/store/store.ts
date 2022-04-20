import {combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension'

// Importamos applyMiddleware de Redux, para poder agregar Thunk o Saga como Middleware
import { createStore, applyMiddleware} from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import personajesReductora from "../reductoras/personajes.reductora";
// import { paginaReductora } from "../reductoras/pagina.reductora";

// Importamos el thunk de redux-thunk
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
   personajes: personajesReductora,
//    pagina: paginaReductora
});

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos el hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)) 
)

