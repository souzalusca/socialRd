import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/D4D03AQEI-WpfjzBMhw/profile-displayphoto-shrink_200_200/0/1683923312615?e=1721260800&v=beta&t=qclKfMPepDRgj30grkTolrU33VrIVX9QlsUg19r-J0Q" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael Alves</strong>
                            <time title='11 de Maio as 08:13h' dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={22}/>
                        </button>
                    </header>

                    <p>De verdade!! o Lucas é brabo mesmo </p>
                </div>
                <footer>
                    <button>
                    <ThumbsUp size={20}/>
                    Curtir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}