import React from 'react';
import {Carousel} from "react-bootstrap"
import "./Home.css";
import carousel1 from "../../assets/carousels/carousel1.jpg";
import carousel2 from "../../assets/carousels/carousel2.jpg";
import carousel3 from "../../assets/carousels/carousel3.jpg";
import carousel4 from "../../assets/carousels/carousel4.jpg";
import carousel5 from "../../assets/carousels/carousel5.jpg";
import HeartImg from "../../assets/Homepage/HeartImg2.png"

import CountDown from "../Counter/Counter.js";
const Home = () => { 
    const eventDate = '2024-12-31';
    return (
        <React.Fragment>
            <div className="carousel-container" id="home"> 
                <div className="heart-overlay">
                    <img src={HeartImg} alt="Heart" className="heart-img" />
                    <div className="save-the-date">
                        <h2>We're Getting Married</h2>
                        <h1>Save Our Date</h1>
                        <h3>31 December 2024</h3>
                    </div>
                </div>

                <Carousel interval={1500}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={carousel1}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={carousel2}
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={carousel3}
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={carousel4}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={carousel5}
                            alt="Fifth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div>
                <CountDown eventDate={eventDate} />
            </div>
        </React.Fragment>
    )
};

export default Home;