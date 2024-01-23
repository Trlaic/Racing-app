import styles from './NotFoundPage.module.scss'

export default function NotFoundPage() {
    return (
        <div className={styles.container}>
          <h1 className={styles.heading}>404 - Not Found</h1>
          <p className={styles.paragraph}>Sorry, the page you are looking for might not exist.</p>
        </div>
    );
}