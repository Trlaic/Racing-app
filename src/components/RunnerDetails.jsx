import styles from './RunnerDetails.module.scss';


export default function RunnerDetails() {
    return (
        <div className={styles.container}>
            <h1>Runner details</h1>
            <p>You can add max 10 participants</p>
            <form>
                <label htmlFor="runner-name">Name</label>
                <input type="text" id="runner-name" />
                <label htmlFor="runner-speed">Speed</label>
                <input type="number" id="runner-speed" />
                <label htmlFor="runner-start-time">Start time</label>
                <input type="time" id="runner-start-time" />
            </form>
        </div>
    )
}