import anime from 'animejs';

function animeTransition(elem, style){
    return anime({
        targets: elem,
        ...style
    });
}

export default animeTransition;