import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfoTwo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
        </animated.div>
    );

}

export default CardInfoTwo;