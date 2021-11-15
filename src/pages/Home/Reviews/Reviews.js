import React, { useEffect, useState } from 'react';
import { Carousel, Container, Spinner } from 'react-bootstrap';
import user_icon from '../../../images/default-user.png';
import review_bg from '../../../images/review-bg.jpg';
import './Reviews.css';
const Reviews = () => {
    const [index, setIndex] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://immense-gorge-36476.herokuapp.com/reviews`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setIsLoading(false);
            });
    }, []);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const reviewBg = {
        background: `url(${review_bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(45,58,74,.5)',
        backgroundBlendMode: 'lighten',
    }
    if (isLoading) {
        return (
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />
        );
    }
    return (
        <div className="reviews my-5">
            <Container>
                <h2 className="text-start">Client Reviews:</h2>
                <div style={reviewBg}>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {
                            reviews.map((review, index) =>
                                <Carousel.Item key={review._id}>
                                    <img
                                        className="d-block"
                                        src={user_icon}
                                        alt="BMW X5"
                                    />
                                    <Carousel.Caption>
                                        <h4>{review.name}</h4>
                                        <p className="m-0">{review.comment}</p>
                                        <div className="text-warning">
                                            {
                                                [...Array(parseInt(review.rating)).keys()].map(number => <i className="fas fa-star" key={number}></i>)
                                            }
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                </div>
            </Container>
        </div>
    );
};

export default Reviews;