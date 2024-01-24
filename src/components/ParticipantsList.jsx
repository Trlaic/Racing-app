import ListItem from './ListItem';
import styles from './ParticipantsList.module.scss';


export default function ParticipantsList() {

    return (
        <div className={styles.container}>
            <h2 className={styles.heading_2}>List of Participants</h2>
            <div className={styles.container_list}>
                <p>Name</p>
                <p>Speed</p>
                <p>Start Time</p>
                <p>End Time</p>
            </div>
            <ListItem />
        </div>
    )
}