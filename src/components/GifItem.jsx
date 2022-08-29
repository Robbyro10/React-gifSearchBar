import React from 'react'
import PropTypes from 'prop-types';

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

PropTypes


GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}