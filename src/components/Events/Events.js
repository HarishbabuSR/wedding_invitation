import React from "react";
import {Row, Col} from "react-bootstrap";
import TextBelowImg from "../../assets/Couple/couple_title_img.png";
import Reception_Img from "../../assets/Events/Reception.jpg";
import Marriage_Img from "../../assets/Events/Marriage.jpg";

import "./Events.css";

const Events = () => {

    const handleReceptionCalendar = () => {
            // Define the event times in IST (India Standard Time)
            const startTimeIST = new Date(Date.UTC(2024, 11, 25, 19, 0)); // 7:00 PM IST
            const endTimeIST = new Date(Date.UTC(2024, 11, 25, 22, 0));   // 10:00 PM IST

            // Convert IST times to UTC (subtract 5 hours 30 minutes)
            const startDateTimeUTC = new Date(startTimeIST.getTime() - (5.5 * 60 * 60 * 1000)).toISOString().replace(/-|:|\.\d{3}/g, '');
            const endDateTimeUTC = new Date(endTimeIST.getTime() - (5.5 * 60 * 60 * 1000)).toISOString().replace(/-|:|\.\d{3}/g, '');

            const event = {
                title: 'Reception',
                startDateTime: startDateTimeUTC, // UTC format
                endDateTime: endDateTimeUTC,   // UTC format
                description: 'Our Marriage Reception',
                location: 'https://maps.app.goo.gl/yXSsxCUnGmZMvpNu9',
            };

            const generateGoogleCalendarLink = () => {
                return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDateTime}/${event.endDateTime}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`;
            };

            window.open(generateGoogleCalendarLink(), '_blank');
        };

        const handleMahurthamCalendar = () => {
            // Define the event times in IST (India Standard Time)
            const startTimeIST = new Date(Date.UTC(2024, 11, 26, 10, 0)); // 7:00 PM IST
            const endTimeIST = new Date(Date.UTC(2024, 11, 26, 11, 0));   // 10:00 PM IST

            // Convert IST times to UTC (subtract 5 hours 30 minutes)
            const startDateTimeUTC = new Date(startTimeIST.getTime() - (5.5 * 60 * 60 * 1000)).toISOString().replace(/-|:|\.\d{3}/g, '');
            const endDateTimeUTC = new Date(endTimeIST.getTime() - (5.5 * 60 * 60 * 1000)).toISOString().replace(/-|:|\.\d{3}/g, '');

            const event = {
                title: 'Mahurtham',
                startDateTime: startDateTimeUTC, // UTC format
                endDateTime: endDateTimeUTC,   // UTC format
                description: 'Our Marriage Mahurtham',
                location: 'https://maps.app.goo.gl/yXSsxCUnGmZMvpNu9',
            };

            const generateGoogleCalendarLink = () => {
                return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDateTime}/${event.endDateTime}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`;
            };

            window.open(generateGoogleCalendarLink(), '_blank');
        };

    return (
        <React.Fragment>
            <div className="event-area event-padding" id="events">
                <div className="event-container">
                    <div className="event-title">
                        <div className="event-container">
                            <Row className="eventTitle-row">
                                <Col>
                                    <h2>When and Where</h2>
                                    <img src={TextBelowImg} alt="sample" />
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="event-area-menu">
                        <div className="event-wrap">
                            <Row className="eventTitle-row">

                                <Col xs={12} sm={12} md={5} lg={5} className="col-sty">
                                    <div className="ceremony-img">
                                        <img src={Reception_Img} alt="reception"/>
                                    </div>
                                </Col>

                                <Col xs={12} sm={12} md={7} lg={7} className="col-sty">
                                    <div className="ceremony-content">
                                        <h3>Reception Party</h3>
                                        <span>Sunday, 25 Dec 2024, 7.00 PM-10.00 PM</span>
                                        <span>256 Apay Road, Bangalore</span>
                                        <p>It is a long established fact that a reader will be distracted 
                                            by the readable content of a page when looking at its layout. 
                                            The point of using Lorem Ipsum is that it has a more-or-less normal 
                                        </p>
                                        <div>
                                            <a href="https://maps.app.goo.gl/yXSsxCUnGmZMvpNu9" target="_blank" rel="noreferrer">See Location</a>
                                            <button className="calendar-btn" onClick={handleReceptionCalendar}><i className="fa fa-calendar calendar-icon" />Add to Calendar</button>
                                        </div>
                                    </div>
                                   
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="event-wrap">
                            <Row className="eventTitle-row">

                            <Col xs={12} sm={12} md={7} lg={7} className="col-sty">
                                    <div className="ceremony-content ceremony-content2">
                                        <h3>Wedding Party</h3>
                                        <span>Sunday, 26 Dec 2024, 10.00 AM-11.00 AM</span>
                                        <span>256 Apay Road, Bangalore</span>
                                        <p>It is a long established fact that a reader will be distracted 
                                            by the readable content of a page when looking at its layout. 
                                            The point of using Lorem Ipsum is that it has a more-or-less normal 
                                        </p>
                                        <div>
                                            <a href="https://maps.app.goo.gl/yXSsxCUnGmZMvpNu9" target="_blank" rel="noreferrer">See Location</a>
                                            <button className="calendar-btn" onClick={handleMahurthamCalendar}><i className="fa fa-calendar calendar-icon" />Add to Calendar</button>
                                        </div>
                                    </div>
                                </Col>

                                <Col xs={12} sm={12} md={5} lg={5} className="col-sty">
                                    <div className="ceremony-img">
                                        <img src={Marriage_Img} alt="reception"/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Events;