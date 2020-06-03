const getCurrentDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() > 9 ? `${date.getMonth()}` : `0${date.getMonth()}`}-${date.getDate() > 9 ? `${date.getDate()}` : `0${date.getDate()}`} time: ${date.getHours() > 9 ? `${date.getHours()}` : `0${date.getHours()}`}:${date.getMinutes() > 9 ? `${date.getMinutes()}` : `0${date.getMinutes()}`}:${date.getSeconds() > 9 ? `${date.getSeconds()}` : `0${date.getSeconds()}`}`
}

export default getCurrentDate;