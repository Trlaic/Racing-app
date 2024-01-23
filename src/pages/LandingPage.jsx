import styles from './LandingPage.module.scss';
import ParticipantsList from "../components/ParticipantsList";
import RunnerDetails from "../components/RunnerDetails";

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.container_left}>
                <RunnerDetails />
            </div>
            <div className={styles.container_right}>
                <ParticipantsList />
            </div>
        </div>
    )
}