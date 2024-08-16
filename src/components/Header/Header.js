import React, {useState, useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import "./Header.css"
const Header = ()=> {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

//After scrolling highlighted navbar
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = ['home', 'couple', 'people', 'events', 'gallery'];
  //     let currentSection = 'home';
  //     for (let section of sections) {
  //       const element = document.getElementById(section);
  //       if (element && window.scrollY >= element.offsetTop - 100) {
  //         currentSection = section;
  //       }
  //     }
  //     setActiveSection(currentSection);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

    return (
        <React.Fragment>
          <div id="scrollTop">
            <Navbar expanded={expanded} expand="lg" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`} fixed="top"> 
                <Container>
                    <Navbar.Brand href="#home" >
                        <span>Robert <span className="heart"><i className="fa fa-heart"/></span> Julie</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />

                    <Navbar.Collapse id="basic-navbar-nav"> 
                        <Nav className="ml-auto" onClick={()=> setExpanded(false)}> 
                            <Nav.Link href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</Nav.Link>
                            <Nav.Link href="#couple" className={activeSection === 'couple' ? 'active' : ''}>Couple</Nav.Link>
                            <Nav.Link href="#people" className={activeSection === 'people' ? 'active' : ''}>People</Nav.Link>
                            <Nav.Link href="#events" className={activeSection === 'events' ? 'active' : ''}>Events</Nav.Link>
                            <Nav.Link href="#gallery" className={activeSection === 'gallery' ? 'active' : ''}>Gallery</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          </div>
        </React.Fragment>
    )
};

export default Header;