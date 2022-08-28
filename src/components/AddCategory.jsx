
import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() )
        setInputValue('');
    }

    
  return (
    <form onSubmit={onSubmit} action=".">
        <input 
            type="search"
            placeholder='What are you looking for?'
            value={inputValue}
            onChange={onInputChange}
        />
            
    </form>
  )
}
