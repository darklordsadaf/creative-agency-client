import React from 'react';
import Client from '../Client/Client';
import Contact from '../Contact/Contact';
import DemoWork from '../DemoWork/DemoWork';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Client />
            <Services />
            <DemoWork />
            <Feedback />
            <Contact />
            <p className="text-center color-yellow pb-4"><small>copyright Sadaf {(new Date()).getFullYear()} All Rights Reserved</small></p>
        </div>
    );
};

export default Home;