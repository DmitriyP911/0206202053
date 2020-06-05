import React, { Component } from 'react';
import Styles from './statisticStyles.module.css';
import StatisticButton from './StatisticButton/StatisticButton';

class Statistic extends Component {
    state = {
        reserve: 0,
        tours: 0,
        hotels: 0,
        total: 0,
    }

    handleChangeStat = ( e ) => {
        const { name } = e.target;
        const { hotels, tours, reserve } = this.state;
        this.setState( prevState => {
            return {
                [name]: prevState[name] + 1,
                total: hotels + tours + reserve + 1
            }
        } )
    }

    render () {
        const { total } = this.state;
        return (
            <div className={Styles.statWrap}>
                <p className={Styles.statServices}>Услуги</p>
                <StatisticButton
                    color={'#B1E19B'}
                    itemName={'Ручное бронирование'}
                    componentName={'reserve'}
                    statisticItem={this.state.reserve}
                    total={this.state.total}
                    changeStat={this.handleChangeStat}
                />
                <StatisticButton
                    color={'skyblue'}
                    itemName={'Пакетные туры'}
                    componentName={'tours'}
                    statisticItem={this.state.tours}
                    total={this.state.total}
                    changeStat={this.handleChangeStat}
                />
                <StatisticButton
                    color={'skyblue'}
                    itemName={'Отели'}
                    componentName={'hotels'}
                    statisticItem={this.state.hotels}
                    total={this.state.total}
                    changeStat={this.handleChangeStat}
                />
                <div className={Styles.statTotal}>
                    <p>Всего: </p>
                    <p>{total}</p>
                </div>
            </div >
        )
    }
}

export default Statistic;