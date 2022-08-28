
import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifSearchBarApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = ( newCategory ) => {
        const catsLower = categories.map(e => e.toLowerCase());
        if (catsLower.includes(newCategory.toLowerCase())) {
            alert('Category already added');
            return;
        }
        const catCapitalized = newCategory.charAt(0).toUpperCase() + newCategory.slice(1);
        setCategories([catCapitalized, ...categories])
    }

    return (
        <>
            <h1>Looking for a GIF?</h1>
            <p>Looking for change</p>
            <div className="gif-search">
                <AddCategory 
                    onNewCategory={onAddCategory} 
                />

                <button onClick={()=> setCategories([])}>
                    Clear
                </button>
            </div>

            {
                categories.map( category => (
                    <GifGrid 
                    key={category}
                    category={category}
                    />
                ))
            }
        </>
    )
}