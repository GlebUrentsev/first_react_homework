import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../App.module.css';
import all_events from '../data/events.json';
const Event = (props) => {
    let {number} = useParams();
    number = number.substring(1);
    let event_item = all_events.find(x => x.id === number);
    let {id,name,image} = event_item;
    return(
        <div className={styles.container_single}>
              <div>
                <a href="/">Go to all</a>
                <h1 className={styles.card_wrapper_header}>Event {name}</h1>  
              </div>
              <div className={`${styles.events_wrapper_item} ${styles.single}`}>
                    <div className={styles.image_wrapper}>
                        <span className={styles.event_number}>{id}</span>
                        <img src={image} alt={name}/>
                        <span className={styles.event_title}>{name}</span>
                    </div>
               </div>
        </div>
    );
}

export default Event;