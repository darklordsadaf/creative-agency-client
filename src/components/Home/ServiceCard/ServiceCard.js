import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = (props) => {

    const { service } = props;
    return (
        <Link to="/order" className="col-md-4 service-card">
            <img class="display-center" src={service.img} alt="" />
            <h4 class="text-center my-2">{service.title}</h4>
            <p class="text-center">{service.description}</p>
        </Link>
    );
};

export default ServiceCard;