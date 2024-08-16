import React from "react";
import {Row, Col} from "react-bootstrap";
import Heart_Shape from "../../assets/Couple/couple_shape.png";
import Bride_Photo from "../../assets/Couple/Bride_Photo.jpg";
import Groom_Photo from "../../assets/Couple/Groom_Photo.jpg";
import "./Couple.css";
import Invite from "../../assets/Couple/Wedding_Invitation.jpg";

const Couple = () => {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = Invite;
        link.download = "Wedding_Invitation.jpg"; // Set the name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      const openLocation = () => {
        
        // Construct the Google Maps URL
        const googleMapsUrl = "https://maps.app.goo.gl/yXSsxCUnGmZMvpNu9";

        // Open the URL in a new tab
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <React.Fragment>
            <div className="section-title" id="couple">
                <div className="container">
                    <Row className="title-row">
                        <Col xs={12} sm={12} md={12} lg={12} className="title-col">
                            <h2>Happy Couple</h2>
                        </Col>
                    </Row>
                </div>
            </div>
            
            <div className="container">
                <div className="couple-wrap">
                    <Row className="couple-row">
                        <Col lg={5} md={12} sm={12} className="couple-single1">
                            <div className="couple-wrap couple-wrap-2">
                                <div className="couple-img">
                                    <img src={Bride_Photo} alt="thumb"/>
                                </div>
                                <div className="couple-text">
                                    <div className="couple-content">
                                        <h3>Julie</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero vel neque semper pharetra. Nulla facilisi. Donec et velit euismod, ultricies nunc eu, feugiat lorem.</p>
                                    </div>
                                    <div className="social-icons"></div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} className="couple-single-shape">
                            <div className="couple-shape">
                                <img src={Heart_Shape} alt="shape"/>
                            </div>
                        </Col>
                        <Col lg={5} md={12} sm={12} className="couple-single">
                            <div className="couple-wrap couple-wrap-3">
                                <div className="couple-img couple-img-2">
                                    <img src={Groom_Photo} alt="thumb"/>
                                </div>
                                <div className="couple-text">
                                    <div className="couple-content">
                                        <h3>Robert</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero vel neque semper pharetra. Nulla facilisi. Donec et velit euismod, ultricies nunc eu, feugiat lorem.</p>
                                    </div>
                                    <div className="social-icons"></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="welcome-bg">
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} >
                    
                        {/* <img src={Welcome_Img} alt="welcome" className="welcome_bg_img" /> */}
                        <div className="welcome-text">
                            <h1>Welcome to our big day</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or less normal distribution of letters </p>
                            <div className="welcome-buttons"> 
                                <button className="invite-button" onClick={handleDownload}>Download Invite</button>
                                <button className="location-btn" onClick={openLocation}>Location</button>
                            </div>
                        </div>

                </Col>
            </Row>
            </div>
        </React.Fragment>
    )
};

export default Couple;
