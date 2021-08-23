import React from 'react';

import CardTwo from '../components/CardTwo';

import colors from '../assets/images/colors.jpeg';
import pomodoro from '../assets/images/pomodoro.jpg';
import van from '../assets/images/van.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class CarouselTwo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Solid Background Generator:',
                    subTitle: 'Color inspiration for web development',
                    imgSrc: colors,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Pomodoro Clock:',
                    subTitle: 'Productivity app and Leetcode study tool',
                    imgSrc: pomodoro,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Kerouac Lorem Ipsum:',
                    subTitle: 'Classic lorem ipsum generator with a literary twist',
                    imgSrc: van,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <CardTwo item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default CarouselTwo;