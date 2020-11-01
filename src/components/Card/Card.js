import React from 'react'
import cardStyles from './card.module.css'

export default function Card(props) {
    return(
        <div className={cardStyles.card}>
            <figure>
                <img
                src="https://demis.io"
                alt="card-image"
                className={cardStyles.img}
                />
            </figure>
            <h2 className={cardStyles.h2}>{props.name}</h2>
            <p className={cardStyles.p}>{props.description}</p>
        </div>
    )
}