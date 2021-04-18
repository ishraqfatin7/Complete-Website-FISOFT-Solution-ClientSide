import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Order Summary" , link: "/summary"},
        {name: "Order Check" , link: "/checkOrder"},
        {name: "Which Services We Need to Add" , link: "/add-new-service"},
        {name: "Back Order" , link: "/BackOrder"},
        {name: "Reviews" , link: "/AllReviews"},
    ]
    const ourAddress = [
        {name: "Pasadena - California" , link: "//google.com/map"},
        {name: "123" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Order Summary" , link: "/summary"},
        {name: "Order Check" , link: "/checkOrder"},
        {name: "Which Services We Need to Add" , link: "/add-new-service"},
        {name: "Back Order" , link: "/BackOrder"},
        {name: "Reviews" , link: "/AllReviews"},
    ]
    const services = [
        {name: "Order Summary" , link: "/summary"},
        {name: "Order Check" , link: "/checkOrder"},
        {name: "Which Services We Need to Add" , link: "/add-new-service"},
        {name: "Back Order" , link: "/BackOrder"},
        {name: "Reviews" , link: "/AllReviews"},
    ]
    return (
        <footer className="footer-area clear-both bg-dark mt-3">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Anything to check"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Order Status" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call US</h6>
                            <button className="btn btn-primary">+1234567892</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;