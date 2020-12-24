import React from 'react';
import webMobileDesign from '../../../images/icons/webMobileDesign.png';
import graphicDesign from '../../../images/icons/graphicDesign.png';
import webDevelopment from '../../../images/icons/webDevelopment.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const services = [
    {
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.',
        img: webMobileDesign
    },
    {
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img: graphicDesign
    },
    {
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img: webDevelopment
    }
];



const Services = () => {
    return (
        <section className="pt-5 container">
            <h2 className="text-center mb-5">Provide awesome <span className="text-green">services</span> </h2>

            <div className="row">
                {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;