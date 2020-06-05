import React, { Component } from 'react';
import photo from '../../assets/photo.png';
import Statistic from '../Statistic/Statistic';
import Styles from './profileStyles.module.css';
import Comments from '../Comments/Comments';
import shortId from 'shortid';

export default class Profile extends Component {

    state = {
        allComments: [],
        comment: "",
        userName: "",
    }

    handleAddComment = ( e ) => {
        const { name, value } = e.target;
        this.setState( {
            [name]: value
        } )
    }

    handleSubmit = ( e ) => {
        e.preventDefault();
        const { comment, userName } = this.state;
        this.setState( prevState => {
            return {
                allComments: [...prevState.allComments, {
                    id: shortId.generate(),
                    name: userName,
                    comment: comment
                }]
            }
        } )
        this.setState( {
            comment: "",
        } )
    }

    handleEnterSubm = ( e ) => {
        e.preventDefault();
        if( e.ctrlKey && e.keyCode === 13 ) {
            this.handleSubmit( e )
        }
    }

    deleteComment = ( id ) => {
        this.setState( prevState => ( {
            allComments: prevState.allComments.filter( comment => comment.id !== id )
        } ) )
    }

    componentDidUpdate ( prevState ) {
        if( prevState.allComments !== this.state.allComments ) {
            localStorage.setItem( 'comments', JSON.stringify( this.state.allComments ) );
        }
    }

    componentDidMount () {
        const localStorageComments = localStorage.getItem( 'comments' );
        if( localStorageComments ) {
            this.setState( { allComments: JSON.parse( localStorageComments ) } );
        }
    }

    render () {
        const { reserve, tours, hotels, total, comment, allComments } = this.state;
        return (
            <main className={Styles.mainWrap}>
                <header className={Styles.header}>
                    <div className={Styles.headerTitle}>
                        <h1>Вероника</h1>
                        <h2>Менеджер по продажам</h2>
                    </div>
                    <div className={Styles.headerQuote}>
                        <img onClick={this.props.openModal} className={Styles.headerPhoto} src={photo} alt="user img" />
                        <p>Подберу для Вас самые лучшие предложения. Мои услуги абсолютно бесплатны.</p>
                    </div>
                </header>
                <Statistic onChangeStat={this.handleChangeStat}
                    reserve={reserve}
                    tours={tours}
                    hotels={hotels}
                    total={total}
                />
                <div className={Styles.commentsMenu}>
                    <div>
                        <button className={Styles.latestComments}>Последние отзывы</button>
                        <button className={Styles.allComments}>Все отзывы</button>
                    </div>
                    <div className={Styles.svgBtnsWrap}>
                        <button className={Styles.likeBtn}>
                            <svg enableBackground="new 0 0 32 32" height="14px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="14px" space="preserve" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <path className={Styles.commentBtnSvg} d="M22.229,4.514c-2.547,0-4.85,1.334-5.919,3.414c-1.07-2.079-3.401-3.414-5.948-3.414  c-3.981,0-9.319,3.209-6.888,11.963C6.251,25.034,16.31,30.065,16.31,30.063c0,0.002,10.044-5.029,12.821-13.586  C31.562,7.723,26.209,4.514,22.229,4.514z" />
                            </svg>
                        </button>
                        <p>131</p>
                        <button className={Styles.commentBtn}>
                            <svg enableBackground="new 0 0 32 32" height="14px" id="svg2" version="1.1" viewBox="0 0 32 32" width="14px" id="background">
                                <g>
                                    <rect fill="none" height="24" width="24" />
                                </g>
                                <g id="comment">
                                    <path d="M30,2v22H10.416l-6.002,6H2l0,0L2,2 M9.583,22H28V4H4v23.583L9.583,22z" />
                                    <rect height="2" width="18" x="8" y="8" />
                                    <rect height="2" width="18" x="8" y="12" />
                                    <rect height="2" width="12" x="8" y="16" />
                                </g>
                            </svg>
                        </button>
                        <p>{allComments.length}</p>
                    </div>
                </div>
                <Comments onAddComment={this.handleAddComment}
                    handleEnterSubmit={this.handleEnterSubm}
                    textAreaValue={comment}
                    onSubmit={this.handleSubmit}
                    allComments={allComments}
                    onDeleteComment={this.deleteComment}
                />
            </main >
        )
    }
}
