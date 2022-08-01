import { useFetchGif } from "../../Hooks/useFetchGif";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGif( category )
  
    return (
      <div>
          <h3> { category } </h3>

          {
            isLoading ? ( <div className="lds-hourglass"></div> ) : null
            /* OPERADOR TERNARIO QUE PREGUNTA SI isLoading ES TRUE, QUE PONGA EL SIGUIENTE MENSAJE Y SI NO NULL - YA QUE NULL NO SE RENDERIZA EN REACT (probar en consola el isLoading y ver el useFetchGif si no entendemos) */
          }

          <div className="card-grid">
          {
            images.map(img => ( /* CON LOS PARETENSIS EN COM HACER UN RETURN IMPLICITO */
              <GifGridItem 
                key={img.id} 
                image={img}
                /* {...image} TAMBIEN PODEMOS HACER ESTO, PARA QUE TODOS LOS VALORES DEL IMAGE LOS DESESTRUCTURE - Y LOS RECIBIMOS ASI EN EL COMPONENTE GifGridItem {title, url, id} Y SON LIBRES DE USAR*/
              />
            ))
          }
          </div>
      </div>
  )
}
