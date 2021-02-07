import React, { useEffect, useState } from 'react';
import nash from '../../../images/nash.png';
import miriam from '../../../images/miriam.png';
import bria from '../../../images/bria.png';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import './Feedback.css'


// const feedbackData = [
//     {
//         name: 'Nash Patrik',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
//         img: nash,
//         designation: 'CEO, Manpol'
//     },
//     {
//         name: 'Miriam Barron',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
//         img: miriam,
//         designation: 'CEO, Manpol'
//     },
//     {
//         name: 'Bria Molone',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
//         img: bria,
//         designation: 'CEO, Manpol'
//     },
// ]

const Feedback = () => {

    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('https://obscure-shore-87092.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFeedbacks(data)
            })
    }, [])
    return (
        <section className="feedback my-4 py-4">

            <div className="container ">
                <div>
                    <h2 className="text-center mt-5 mb-5"><span className="text-blue">Clients </span><span className="text-green">Feedback</span> </h2>
                </div>
                <div className="d-flex justify-content-center row mt-5">
                    {
                        feedbacks.length === 0 && <img className="rounded mx-auto d-block " src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" />
                    }
                    {
                        feedbacks.map(feedback => <FeedbackCard feedback={feedback} key={feedback.name} />)
                    }
                </div>

            </div>
        </section>
    );
};

export default Feedback;