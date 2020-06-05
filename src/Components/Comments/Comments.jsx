import React, { Component, createRef } from 'react';
import Styles from './commentsStyles.module.css';
import deleteIcon from '../../assets/icons/delete.svg';
import date from '../../utils/getCurrentDate';
import PropTypes from 'prop-types';
import { scrollDown } from '../../utils/scrollDown';

export default class Comments extends Component {

    listRef = createRef();

    static propTypes = {
        onAddComment: PropTypes.func.isRequired,
        textAreaValue: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired,
        allComments: PropTypes.arrayOf( PropTypes.shape( {
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired
        } ) ),
        onDeleteComment: PropTypes.func.isRequired
    };

    componentDidUpdate = ( prevProps ) => {
        if( prevProps.allComments !== this.props.allComments ) {
            this.listRef.current.scrollTop = this.listRef.current.scrollHeight;
            scrollDown()
        }
    }

    render () {
        const { onAddComment, textAreaValue, onSubmit, allComments, onDeleteComment, handleEnterSubmit } = this.props;

        return (
            <div>
                <ul ref={this.listRef} className={Styles.commentsList}>
                    {
                        allComments.map( ( { name, id, comment } ) => (
                            <li className={Styles.commentsListItem}
                                key={id}>
                                <div className={Styles.commentInfo}>
                                    <div>
                                        <p className={Styles.userName}>{name}</p>
                                        <p className={Styles.timeWhenCommentAdd}>{date()}</p>
                                    </div>
                                    <button onClick={() => onDeleteComment( id )}
                                        className={Styles.commentsDeleteBtn}>
                                        <img
                                            className={Styles.commentsDeleteSvg}
                                            src={deleteIcon}
                                            alt="" />
                                    </button>
                                </div>
                                <div>
                                    <div className={Styles.comment}>
                                        <div className={Styles.commentStyle}></div>
                                        <p>{comment}</p>
                                    </div>
                                </div>

                            </li>
                        ) )
                    }
                </ul>
                <form
                    onKeyUp={handleEnterSubmit}
                    ref={this.props.formRef}
                    onSubmit={onSubmit}
                    className={Styles.commentsForm}
                    action="">
                    <input className={Styles.userNameInput}
                        onChange={onAddComment}
                        type="text"
                        placeholder="Введите имя"
                        name="userName"
                    />
                    <textarea
                        onChange={onAddComment}
                        value={textAreaValue}
                        name="comment"
                        wrap="soft"
                        rows="6"
                        className={Styles.commentTextarea}
                        placeholder="Введите комментарий..."
                    />
                    <button onSubmit={onSubmit}
                        className={Styles.addComment}>Добавить комментарий</button>
                </form>
            </div >
        )
    }
} 