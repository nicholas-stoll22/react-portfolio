import React from 'react';

import Hero from '../components/Hero';
import CarouselTwo from '../components/CarouselTwo';

function ProjectPage(props) {

    return(
        <div className="left">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <CarouselTwo />
        </div>
    )
}

export default ProjectPage;