import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone, faMessage, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './contact.css'

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2>Get in Touch</h2>
      <p>For reservation & early booking contact:</p>
      <div className="contact-details">
        <div className="cellphone-number">
          <p><FontAwesomeIcon icon={faSquarePhone} /> Phone: 09171552808</p>
        </div>
        <div className="facebook">
          <p><FontAwesomeIcon icon={faMessage} /> Facebook: Maturan Elleda</p>
        </div>
        <div className="address">
          <p><FontAwesomeIcon icon={faLocationDot} /> Address: Timba, San Juan, Southern Leyte</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;


