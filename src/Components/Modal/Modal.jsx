import React from 'react';
import PropTypes from 'prop-types';
import styles from './modalStyles.module.css';

export const Modal = ( { onOpenModal, onCloseModal } ) => (
    <div onClick={onCloseModal} className={styles.div}>
        <img className={styles.img} src={onOpenModal} alt="" />
    </div>
)

Modal.propTypes = {
    onOpenModal: PropTypes.func.isRequired,
    onCloseModal: PropTypes.func.isRequired
} 