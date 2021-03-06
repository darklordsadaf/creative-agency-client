import React, { useEffect, useState } from 'react';
import webMobileDesign from '../../../images/icons/webMobileDesign.png';
import graphicDesign from '../../../images/icons/graphicDesign.png';
import webDevelopment from '../../../images/icons/webDevelopment.png';
import ServiceCard from '../ServiceCard/ServiceCard';

// const services = [
//     {
//         title: 'Web & Mobile design',
//         description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.',
//         img: webMobileDesign
//     },
//     {
//         title: 'Graphic design',
//         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//         img: graphicDesign
//     },
//     {
//         title: 'Web development',
//         description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//         img: webDevelopment
//     }
// ];



const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://obscure-shore-87092.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <section className="pt-5 container">
            <h2 className="text-center mb-5">Provide awesome <span className="text-green">services</span> </h2>

            <div className="row">
                {
                    services.length === 0 && <img className="rounded mx-auto d-block " src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" />
                }
                {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;