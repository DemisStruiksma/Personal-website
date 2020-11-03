import React from 'React'
import styles from "../styles/Home.module.css"

function Card(props) {
    return(
        <div className={styles.card}>
                <img
                src={props.image}
                alt="card-image"
                className={styles.cardImage}
                />
            <div className={styles.cardDescription}>
                <h2 className={styles.cardHeading}>{props.name}</h2>
                <h3 className={styles.cardJob}>{props.job}</h3>
                <h4 className={styles.cardDuration}>{props.duration}</h4>
                <hr className={styles.cardHr}></hr>
                <p className={styles.cardText}>{props.description}</p>
            </div>
            
        </div>
        
    )   
}

export default Card;