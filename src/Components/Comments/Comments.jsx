import React, { Component, createRef } from 'react';
import Styles from '../../Styles/Comments/commentsStyles.module.css';
import deleteIcon from '../../img/icons/delete.svg';
import date from '../../utils/getCurrentDate';

export default class Comments extends Component {

    listRef = createRef()

    componentDidUpdate = ( prevProps ) => {
        if( prevProps.allComments.length > 2 !== null && prevProps.allComments !== this.props.allComments ) {
            this.listRef.current.scrollTop = this.listRef.current.scrollHeight;
        }
    }

    render () {
        const { onAddComment, textAreaValue, onSubmit, allComments, onDeleteComment } = this.props;
        return (
            <div>
                <ul ref={this.listRef} className={Styles.commentsList}>
                    {
                        allComments.map( comment => (
                            <li className={Styles.commentsListItem}
                                key={comment.id}>
                                <div className={Styles.commentInfo}>
                                    <p>{comment.name}</p>
                                    <p>{date()}</p>
                                    <button onClick={() => onDeleteComment( comment.id )}
                                        className={Styles.commentsDeleteBtn}>
                                        <img
                                            className={Styles.commentsDeleteSvg}
                                            src={deleteIcon}
                                            alt="" />
                                    </button>
                                </div>
                                <p className={Styles.comment}>{comment.comment}</p>
                            </li>
                        ) )
                    }
                </ul>
                <form onSubmit={onSubmit}
                    className={Styles.commentsForm}
                    action="">
                    <input onChange={onAddComment}
                        type="text"
                        placeholder="Введите имя"
                        name="userName"
                    />
                    <textarea onChange={onAddComment}
                        value={textAreaValue}
                        name="comment"
                        wrap="soft"
                        rows="6"
                        className={Styles.commentTextarea} />
                    <button onSubmit={onSubmit}
                        className={Styles.addComment}>Добавить комментарий</button>
                </form>
            </div >
        )
    }
} 