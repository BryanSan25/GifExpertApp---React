export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=j1ucnp2UYVHV0NabMKLKnywf8YAqAzxO&q=${category}&limit=10`

    const resp = await fetch(url);

    const {data} = await resp.json()

    const gifs = data.map( dataApi => {
        return {
            id: dataApi.id,
            title: dataApi.title,
            url: dataApi.images.downsized_medium.url
        }
    })

    return gifs; /* HAY QUE RETORNAR LOS GIFS PARA QUE NOS FUNCIONE EL STATE IMAGES */

}