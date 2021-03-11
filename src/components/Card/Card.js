import React from 'react'

import './Card.scss'

const Card = ({image, title}) => {
    return (
        <div className='Card' >
            <div className='content' >
                <img src={image} alt='error' />
                <span>{title}</span>
            </div>
        </div>
    )
}

export default Card