import React,{useState, useEffect} from "react";
import {Row, Col, Card, Container} from "react-bootstrap";
import "./Counter.css"
const CountDown = ({eventDate}) => {
    const calculateTimeLeft = () => {
        const difference = new Date(eventDate) - new Date();
        if (difference > 0) {
          return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        } else {
          return null;
        }
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, [eventDate]);
    return (
        <React.Fragment>
           <Container fluid className="countdown-container">
            <Row>
                <div className="event-info">
                    <h5>We Are Waiting For.....</h5>
                    <h1>The Big Day</h1>
                </div>
            </Row>
        <Row className="">
            {timeLeft ? (
            <>
                <Col xs={6} sm={3} md={3} className="text-center">
                <div className="time-box">
                    <h1>{timeLeft.days}</h1>
                    <p>DAY</p>
                </div>
                </Col>
                <Col xs={6} sm={3} md={3} className="text-center">
                <div className="time-box">
                    <h1>{timeLeft.hours}</h1>
                    <p>HOUR</p>
                </div>
                </Col>
                <Col xs={6} sm={3} md={3} className="text-center">
                <div className="time-box">
                    <h1>{timeLeft.minutes}</h1>
                    <p>MIN</p>
                </div>
                </Col>
                <Col xs={6} sm={3} md={3} className="text-center">
                <div className="time-box">
                    <h1>{timeLeft.seconds}</h1>
                    <p>SEC</p>
                </div>
                </Col>
            </>
            ) : (
            <Col xs={12} className="text-center">
                <h2 className="event_text">Event Completed</h2>
            </Col>
            )}
      </Row>
    </Container>

        </React.Fragment>
    )
};

export default CountDown;