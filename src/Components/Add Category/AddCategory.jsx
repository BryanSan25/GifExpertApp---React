import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onChange = (e) => {
        setInputValue(e.target.value);
    } /* ESTE EVENTO NOS DEJA ESCRIBIR EN EL INPUT */

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 2) return;

        onNewCategory( inputValue )
        setInputValue('')
    } /* ESTE EVENTO PUBLICA LO ESCRITO EN EL INPUT */

  return (
    <form onSubmit={onSubmit}>
         <input 
            type="search" 
            name="search-gif"   
            placeholder='Buscar Gifs'
            value={ inputValue } 
            onChange={ onChange }
        />
    </form>
  )
}
