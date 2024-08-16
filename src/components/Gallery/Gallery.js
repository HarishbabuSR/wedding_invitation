import React from "react";
import "./Gallery.css";
import {Row, Col} from "react-bootstrap";
import TextBelowImg from "../../assets/Couple/couple_title_img.png";

import Gallery1 from "../../assets/Gallery/Gallery1.jpg";
import Gallery2 from "../../assets/Gallery/Gallery2.jpg";
import Gallery3 from "../../assets/Gallery/Gallery3.jpg";
import Gallery4 from "../../assets/Gallery/Gallery4.jpg";
import Gallery5 from "../../assets/Gallery/Gallery5.jpg";
import Gallery6 from "../../assets/Gallery/Gallery6.jpg";

import PeopleCard from "../People/PeopleCards";

const Gallery = ()=>{

    const groomPersons = [
        {
          image: Gallery1
        },
        {
          image: Gallery2
        },
        {
          image: Gallery3
        },
        {
            image: Gallery4
        },
        {
        image: Gallery5
        },
        {
        image: Gallery6
        }
      ];

    return (
        <React.Fragment>
            <div className="Gallery-section gallery-padding gpb-90" id="gallery">
                <div className="gallery-title">
                    <div className="gallery-container">
                        <Row className="galleryTitle-row">
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <h2>Our Gallery</h2>
                                <img src={TextBelowImg} alt="sample" />
                            </Col>
                        </Row>
                    </div>
                </div>

                
                <div className="tab-content">
                    <div className="gallery-container1">
                        <Row className="galleryPerson-row">
                            {groomPersons.map((person, index) => (
                                <PeopleCard
                                    key={index}
                                    image={person.image}
                                    // name={person.name}
                                    // role={person.role}
                                />
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Gallery;