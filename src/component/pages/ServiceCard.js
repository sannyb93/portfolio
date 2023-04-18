import React from 'react';


const ServiceCard = props  => {
    return (
        <div>
            <div className="icon"><img src={props.ServiceCard.img}/></div>
            <h2>{props.ServiceCard.heading}</h2>
            <p>{props.ServiceCard.description}</p>
        </div>
    )
}

export default ServiceCard;
