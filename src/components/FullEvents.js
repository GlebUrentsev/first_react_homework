import React from 'react';
import all_events from '../data/events.json';
import styles from '../App.module.css';
const FullEvents = () => {
    return(
        <div className={styles.container}>
            <div className={styles.card_wrapper}>
                <div className={styles.card_wrapper_content}>
                    <h1 className={styles.card_wrapper_header}>Event Listing</h1>  
                    <div className={styles.events_wrapper}>
                      {all_events.map(index =>{
                        let {id,name,image} = index;
                            return(
                                <a className={styles.events_wrapper_item} href={`/:${id}`}>
                                     <div className={styles.image_wrapper}>
                                         <span className={styles.event_number}>{id}</span>
                                         <img src={image} alt={name}/>
                                         <span className={styles.event_title}>{name}</span>
                                     </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullEvents;
