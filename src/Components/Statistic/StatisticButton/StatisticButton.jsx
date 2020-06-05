import React from 'react';
import Styles from '../statisticStyles.module.css';
import PropTypes from 'prop-types'

const StatisticButton = ( { statisticItem, total, changeStat, itemName, color, componentName } ) => (
    <div className={Styles.statItem}>
        <button className={Styles.statBtn}
            style={{
                background: `linear-gradient(to right, ${color} ${( statisticItem / total ) * 100}%, rgba(255, 255, 255, 0) ${( statisticItem / total ) * 100}%)`
            }}
            onClick={changeStat}
            name={componentName}>{itemName}</button>
        <p className={Styles.statText}>{statisticItem}</p>
    </div>
)

StatisticButton.propTypes = {
    statisticItem: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    changeStat: PropTypes.func.isRequired,
    itemName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    componentName: PropTypes.string.isRequired
}

export default StatisticButton;