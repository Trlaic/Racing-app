import styles from './ListItem.module.scss';

export default function ListItem() {

    const runners = [
        {
            name: "Usain Bolt",
            speed: '37.58 km/h',
            startTime: '-',
            endTime: '-'
          },
          {
            name: "Florence Griffith-Joyner",
            speed:'37.77 km/h',
            startTime: '-',
            endTime: '-'
          },
          {
            name: "Carl Lewis",
            speed: '35.5 km/h',
            startTime: '-',
            endTime: '-'
          },
          {
            name: "Asafa Powell",
            speed: '37.03 km/h',
            startTime: '-',
            endTime: '-'
          },
          {
            name: "Shelly-Ann Fraser-Pryce",
            speed: '38.27 km/h',
            startTime: '-',
            endTime: '-'
          }
    ]

    function runnersDisplay() {
        return runners.map((runner, i) => {
            return (
                <div key={i} className={styles.container}>
                    <p>{runner.name}</p>
                    <p>{runner.speed}</p>
                    <p>{runner.startTime}</p>
                    <p>{runner.endTime}</p>
                </div>
            )
        }) 
    }

    return (
        <>
            <div className={styles.template}>
                {runnersDisplay()}
            </div>
            <div className={styles.button_container}>
                <button className='button button--orange'><div className={styles.button_text}>Start Race &rarr;</div></button>
            </div>
        </>
    )
}