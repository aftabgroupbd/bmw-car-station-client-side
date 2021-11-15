import React, { useState } from 'react';
import './Slider.css';
import { Carousel, Container } from 'react-bootstrap';
import silder_1 from '../../../images/slider-1.jpeg';
import silder_2 from '../../../images/slider-2.jpeg';
import silder_3 from '../../../images/slider-3.jpg';
const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="slider">
            <Container>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            style={{ height: '450px' }}
                            className="d-block w-100"
                            src={silder_3}
                            alt="BMW X5"
                        />
                        <Carousel.Caption>
                            <h3>₹ 76.47 Lakh</h3>
                            <p>BMW X5</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '450px' }}
                            className="d-block w-100"
                            src={silder_1}
                            alt="BMW 2 Series Gran Coupe"
                        />

                        <Carousel.Caption>
                            <h3>₹ 39.48 Lakh</h3>
                            <p>BMW 2 Series Gran Coupe</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '450px' }}
                            className="d-block w-100"
                            src={silder_2}
                            alt="BMW 3 Series"
                        />

                        <Carousel.Caption>
                            <h3>₹ 44.84 Lakh</h3>
                            <p>
                                BMW 3 Series
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default Slider;