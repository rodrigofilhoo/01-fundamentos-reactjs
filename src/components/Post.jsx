import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar}
                        src="https://pbs.twimg.com/profile_images/1799835447767527424/Rgk98yrf_400x400.jpg"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Rodrigo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time
                    title='12 de junho de 2024 às 15:04h'
                    dateTime="2024-06-12 15:03:00">
                    Publicado a 1h
                </time>

                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>
                    <p>
                        Acabei de subir mais um projeto no meu portifa.
                        É um projeto que fiz no NLW Return, evento da Rocketseat.
                        O nome do projeto é DoctorCare 🚀
                    </p>
                    <a href="#"><p>👉 jane.design/doctorcare</p></a>
                    <a href="#"><p>#novoprojeto #nlw #rocketseat</p></a>
                </div>
            </header>
        </article>
    )
}