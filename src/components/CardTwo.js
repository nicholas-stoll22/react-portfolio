import React from 'react';

import CardInfoTwo from '../components/CardInfoTwo';


function CardTwo(props) {

    return(
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfoTwo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );

}

export default CardTwo;