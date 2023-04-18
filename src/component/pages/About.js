import React from 'react';


import './About.css';

const About = () => {
    return (
        <div className="about-box">
        <div className="about container">
          <div className="col-left">
            <div className="about-img">
              <img src="./img/img-2.png" alt="img"/>
            </div>
          </div>
          <div className="col-right">
            <h1 className="section-title">About <span>me</span></h1>
            <h2>Front End Developer</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, velit alias eius non illum beatae atque repellat ratione qui veritatis repudiandae adipisci maiores. At inventore necessitatibus deserunt exercitationem cumque earum omnis ipsum rem accusantium quis, quas quia, accusamus provident suscipit magni! Expedita sint ad dolore, commodi labore nihil velit earum ducimus nulla quae nostrum fugit aut, deserunt reprehenderit libero enim!</p>
            <a href="#" className="cta">Download Resume</a>
          </div>
        </div>
      </div>
    );
}

export default About;
