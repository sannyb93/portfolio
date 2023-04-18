import React from 'react';

import Card from '../../UIElements/Card';
import ServiceData from './ServiceData';
import './Serivce.css';
import ServiceCard from './ServiceCard';

// const heading = "web Design";
// const carddata = {
//   img:"https://img.icons8.com/bubbles/100/000000/services.png",
//   heading:"Web Design",
//   description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ipsum deleniti maiores pariatur assumenda quas magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias voluptatum explicabo!'
// }


const Service = props => {

  const ServiceDataComponent = ServiceData.map(item => <ServiceCard ServiceCard={item} />)
    return (
      <React.Fragment>
   <div className="services-box">
    <div className="services container">
      <div className="service-top">
        <h1 className="section-title">Serv<span>i</span>ces</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias voluptatum explicabo!</p>
      </div>
      <div class="service-bottom">
          <Card className="service-item">
        {ServiceDataComponent}
          </Card>
      </div>
    </div>
  </div>
         </React.Fragment>
    )
}

export default Service
