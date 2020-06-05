import React, { Component } from 'react';
import { Modal } from './Modal/Modal';
import Profile from './Profile/Profile';
import photo from '../assets/photo.png';
import Styles from './appStyle.module.css';

export default class App extends Component {

    state = {
        openModal: false,
        modalImg: photo
    }

    handleOpenModal = ( { target } ) => {
        this.setState( {
            openModal: true,
            modalImg: target.currentSrc
        } )
    }

    handleCloseModal = ( { target } ) => {
        if( target.localName !== 'img' ) {
            this.setState( { openModal: false } )
        }
    }

    render () {
        return (
            <div className={Styles.pageWrap}>
                <Profile
                    openModal={this.handleOpenModal}
                />
                {this.state.openModal === true && <Modal
                    onOpenModal={photo}
                    onCloseModal={this.handleCloseModal}
                />}
            </div>
        )
    }
}