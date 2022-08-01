import React from 'react'

export const GifGridItem = ({ image }) => { /* TAMBIEN PODEMOS DESESTRUCTURAR {ID, TITLE, URL} */
  return (
        <div className="card" key={image.id}>

            <img src={image.url} alt={image.title} />
            <p> {image.title} </p>

        </div>
  )
}
