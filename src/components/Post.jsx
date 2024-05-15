import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                   <Avatar src="https://media.licdn.com/dms/image/C5603AQGmsnnXI5CUAw/profile-displayphoto-shrink_800_800/0/1601434547666?e=1721260800&v=beta&t=HN7y6q7ONqrs7YDnEqd4qRP7G38SlgBe5d_DlrLtuAo" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Marcelo Vilela</strong>
                        <span>Developer Junior</span>
                    </div>
                </div>

                <time title='11 de maio às 08:13' dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Meu Amigo é muito pika, deem uma moral pra ele, tmj  🚀</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                   placeholder='Deixe um comentário' 
                />
                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
               
            </div>
        </article>
    )
}