import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import header from '../../../images/logos/header.png'

const HeaderMain = () => {
    const history = useHistory();

    const handleLoginRoute = () => {

        history.push("/order");
    };
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#111430' }}><b>Lets Grow Your<br />Brand To The <br />Next Level</b></h1>
                <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore, velit dolor culpa quo atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, enim. lorem10</p>
                <Link to='/order' onClick={handleLoginRoute} style={{ background: '#111430', padding: '10px' }} className="btn text-white"><b>Hire us</b></Link>
            </div>
            <div className="col-md-6">
                <img src={header} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;