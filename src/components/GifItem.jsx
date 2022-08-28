
import React from 'react'

export const GifItem = ({id, url, title}) => {
  return (
    <li className="card">
            <a href={url} target="_blank">
            <img src={url} alt={title} key={id}/> 
            <p>{title}</p>  
        </a>
    </li>
  )
}
