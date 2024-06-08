import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(props){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/albert-medeiros.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Albert Medeiros</strong>

                            <time title="11 de Maio as 08:13" dateTime='2022-05-11 08:13:38'> Cerca de 1h atrás </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}