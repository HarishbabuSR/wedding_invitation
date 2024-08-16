import React,{useState} from "react";
import {Row, Col, Button, ButtonGroup} from "react-bootstrap";
import "./People.css";
import TextBelowImg from "../../assets/Couple/couple_title_img.png";
import PeopleCard from "./PeopleCards";

import GPerson1 from "../../assets/Persons/GroomSide/Person1.jpg";
import GPerson2 from "../../assets/Persons/GroomSide/Person2.jpg";
import GPerson3 from "../../assets/Persons/GroomSide/Person3.jpg";
import GPerson4 from "../../assets/Persons/GroomSide/Person4.jpg";
import GPerson5 from "../../assets/Persons/GroomSide/Person5.jpg";
import GPerson6 from "../../assets/Persons/GroomSide/Person6.jpg";

import BPerson1 from "../../assets/Persons/BrideSide/Person1.jpg";
import BPerson2 from "../../assets/Persons/BrideSide/Person2.jpg";
import BPerson3 from "../../assets/Persons/BrideSide/Person3.jpg";
import BPerson4 from "../../assets/Persons/BrideSide/Person4.jpg";
import BPerson5 from "../../assets/Persons/BrideSide/Person5.jpg";
import BPerson6 from "../../assets/Persons/BrideSide/Person6.jpg";


const People = () =>{
    const [activeTab, setActiveTab] = useState('groomsmen');

    const groomPersons = [
        {
          image: GPerson1,
          name: 'Mr Abraham',
          role: 'Best Friend',
        },
        {
          image: GPerson2,
          name: 'Rohan Mithy',
          role: 'Brother',
        },
        {
          image: GPerson3,
          name: 'Lily Brown',
          role: 'Sister',
        },
        {
            image: GPerson1,
            name: 'Mr Abraham',
            role: 'Best Friend',
          },
          {
            image: GPerson2,
            name: 'Rohan Mithy',
            role: 'Brother',
          },
          {
            image: GPerson3,
            name: 'Lily Brown',
            role: 'Sister',
          }
      ];

      const bridePersons = [
        {
          image: BPerson1,
          name: 'Mr Abraham',
          role: 'Best Friend',
        },
        {
          image: BPerson2,
          name: 'Rohan Mithy',
          role: 'Brother',
        },
        {
          image: BPerson3,
          name: 'David Jackson',
          role: 'Brother',
        },
        {
            image: BPerson4,
            name: 'Mr Abraham',
            role: 'Best Friend',
          },
          {
            image: BPerson5,
            name: 'Rohan Mithy',
            role: 'Brother',
          },
          {
            image: BPerson6,
            name: 'Lily Brown',
            role: 'Sister',
          }
      ];

      let persons = activeTab === "groomsmen" ? groomPersons : bridePersons;
    return (
        <React.Fragment>
            <div className="person-area section-padding pb-90" id="people">
                <div className="main-container">
                    <div className="section-title1">
                        <div className="section-container">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <h2>Groomsmen & Bridesmaids</h2>
                                    <img src={TextBelowImg} alt="sample" />
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="person-area-menu">
                        <div className="person-btn">
                            <ButtonGroup>
                                <Button
                                    className={`tab-button ${activeTab === 'groomsmen' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('groomsmen')}
                                    >
                                    Groomsmen
                                </Button>
                                <Button
                                    className={`tab-button ${activeTab === 'bridesmaids' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('bridesmaids')}
                                    >
                                    Bridesmaids
                                </Button>
                            </ButtonGroup>
                        </div>

                        <div className="tab-content">
                            <div className="person-container">
                                <Row>
                                    {persons.map((person, index) => (
                                        <PeopleCard
                                            key={index}
                                            image={person.image}
                                            name={person.name}
                                            role={person.role}
                                        />
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default People;