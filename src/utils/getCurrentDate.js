import moment from 'moment';

const getCurrentDate = () => {
    moment.updateLocale( 'ru', {
        months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split( '_' ),
    } );
    return moment().format( 'YYYY MMMM DD' )
}

export default getCurrentDate;