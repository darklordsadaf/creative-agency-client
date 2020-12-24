import React from 'react';
import nash from '../../../images/nash.png';
import miriam from '../../../images/miriam.png';
import bria from '../../../images/bria.png';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import './Feedback.css'


const feedbackData = [
    {
        name: 'Nash Patrik',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        img: nash,
        designation: 'CEO, Manpol'
    },
    {
        name: 'Miriam Barron',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        img: miriam,
        designation: 'CEO, Manpol'
    },
    {
        name: 'Bria Molone',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
        img: bria,
        designation: 'CEO, Manpol'
    },
]

const Feedback = () => {
    return (
        <section className="feedback my-4 py-4">

            <div className="container">
                <div>
                    <h2 className="text-center mt-5 mb-5"><span className="text-blue">Clients </span><span className="text-green">Feedback</span> </h2>
                </div>
                <div className="card-deck mt-5">
                    {
                        feedbackData.map(feedback => <FeedbackCard feedback={feedback} key={feedback.name} />)
                    }
                </div>

            </div>
        </section>
    );
};

export default Feedback;