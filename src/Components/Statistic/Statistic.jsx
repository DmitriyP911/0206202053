import React from 'react';
import Styles from '../../Styles/Statistic/statisticStyles.module.css'

const Statistic = ( { onChangeStat, tours, reserve, hotels, total } ) => (
    <div className={Styles.statWrap}>
        <p className={Styles.statServices}>Услуги</p>
        <div className={Styles.statItem}>
            <button className={Styles.statBtn}
                style={{
                    background: `linear-gradient(to right, #B1E19B ${( reserve / total ) * 100}%, rgba(255, 255, 255, 0) ${( hotels / total ) * 100}%)`
                }}
                onClick={onChangeStat}
                name="reserve">Ручное бронирование</button>
            <p>{reserve}</p>
        </div>
        <div className={Styles.statItem}>
            <button className={Styles.statBtn}
                style={{
                    background: `linear-gradient(to right, skyblue ${( tours / total ) * 100}%, rgba(255, 255, 255, 0) ${( hotels / total ) * 100}%)`
                }}
                onClick={onChangeStat}
                name="tours">Пакетные туры</button>
            <p>{tours}</p>
        </div>
        <div className={Styles.statItem}>
            <button className={Styles.statBtn}
                style={{
                    background: `linear-gradient(to right, skyblue ${( hotels / total ) * 100}%, rgba(255, 255, 255, 0) ${( hotels / total ) * 100}%)`
                }}
                onClick={onChangeStat}
                name="hotels"
            >Отели</button>
            <p>{hotels}</p>
        </div>
        <div className={Styles.statTotal}>
            <p>Всего: </p>
            <p>{total}</p>
        </div>
    </div >
)


export default Statistic;