import React from 'react';



import './Contect.css'
const Contect = () => {
    return (
        <div className="contact-box">
        <div className="contact container">
          <div><h1 className="section-title">Contact <span>info</span></h1></div>
          <div className="contact-items">
            <div className="contact-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png"/></div>
              <div className="contact-info">
                <h1>Phone</h1>
                <h2>+91 9712179002</h2>
                {/* <h2>+91 245466545</h2> */}
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png"/></div>
              <div className="contact-info">
                <h1>Email</h1>
                <h2>sannybhikadiya09@gmail.com</h2>
                {/* <h2>xyz@gmail.com</h2> */}
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png"/></div>
              <div className="contact-info">
                <h1>Address</h1>
                <h2>Gujarat, India</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contect
