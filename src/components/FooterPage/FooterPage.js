import React from "react";
import "./Footer.css";

const FooterPage = ()=> {
    return (
        <React.Fragment>
            <div className="footer-area">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="content-sub">
                            <h2>Thank You</h2>
                            <span>For Being with us</span>
                        </div>
                    </div>
                </div>

                <div className="footer-top-icon">
                    <div className="header-menu">
                        <ul className="smoothscroll">
                            <li>
                                <a href="#scrollTop">
                                    <i className="fa fa-arrow-up"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FooterPage;