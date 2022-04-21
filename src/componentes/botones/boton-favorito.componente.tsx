import './boton-favorito.css';
import {FC} from "react";

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */

 type BotonFavoritoProps = {
    esFavorito: Boolean;
     onClick(): void;
  };


const BotonFavorito: FC<BotonFavoritoProps> = ({esFavorito, onClick}: BotonFavoritoProps) => {

      const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
    
    return <div className="boton-favorito">
        <img onClick={onClick}  src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;