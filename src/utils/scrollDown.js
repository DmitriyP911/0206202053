export const scrollDown = () => {
    return window.scrollTo( {
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    } );
};