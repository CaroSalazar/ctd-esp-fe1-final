import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";
import {Provider} from "react-redux"; 
import {store} from "./Redux/store/store";
// import Personaje from './Redux/types/personajes.types';

function App(personajes: any) {
  
  return (
    <Provider store={store}>
    <div className="App">
      <Encabezado />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos personaje={personajes} favorito={true}/>} />
        <Route path="detalle" element={<PaginaDetalle />} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
