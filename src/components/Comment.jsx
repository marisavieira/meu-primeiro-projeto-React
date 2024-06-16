import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}){

    const [likeCount, seLikeCount] = useState(0);

    function handleLikeComment(){
        seLikeCount(likeCount + 1);
    }
    //<button onClick={()=>seLikeCount(likeCount + 1)}>

    function handleDeleteComment() {
        onDeleteComment(content);
    }

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

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={(handleLikeComment)}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}