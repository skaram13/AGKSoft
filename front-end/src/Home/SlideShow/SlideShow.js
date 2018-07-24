import React, { Component } from 'react';
import './SlideShow.css';
import {Carousel} from 'react-bootstrap';
import axios from 'axios';

class SlideShow extends Component {
    constructor(props){
        super(props);
        this.state = {photos: [{},{},{}]};
    }

    render() {
        const slides =  this.state.photos.map((photo, index) =>
            <Carousel.Item className ="slide-container">
                <div className="home-img">MEOW MEOW MEOW</div>
            </Carousel.Item>);

        return(
            <Carousel className="carousel" interval={3000} carousel="true" slide>
                {slides}
            </Carousel>

        );
    }
}

export default SlideShow;
