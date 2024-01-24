import styles from './RunnerDetails.module.scss';


export default function RunnerDetails() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Runner details</h1>
            <p className={styles.paragraph}>*You can add max 10 participants</p>
            <form>
                <div className={styles.input_container}>
                    <label className={styles.label} htmlFor="runner-name">Name</label>
                    <input className={styles.input} type="text" id="runner-name" placeholder="Usain Bolt" />
                </div>
                <div className={styles.input_container}>
                    <label className={styles.label} htmlFor="runner-speed">Speed</label>
                    <input className={styles.input} type="number" id="runner-speed" placeholder='10 km/h' />
                </div>
                <div className={styles.input_container}>
                    <label className={styles.label} htmlFor="runner-start-time">Start time</label>
                    <input className={styles.input} type="time" id="runner-start-time" />
                </div>
                <button className="button button--black"><span className={styles.span_symbol}>+</span><span className={styles.span_text}>Add Runner</span></button>
            </form>
        </div>
    )
}