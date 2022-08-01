import { useState } from 'react'
import { AddCategory } from './Add Category/AddCategory'
import { GifGrid } from './Gif Grid/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Capitan America']);

    const onAddCategory = (newCategory) => {
        
        if( categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories])
    }

    return (
    <div>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={ onAddCategory } />

        {categories.map( category => {
            return <GifGrid key={category} category={category}/>
        })} 
    </div>
  )
}
