import React from 'react';
import OrderHeader from '../OrderHeader/OrderHeader';
import Sidebar from '../Sidebar/Sidebar';

const Service = () => {
    return (
        <div>
            <OrderHeader />
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div style={{ backgroundColor: '#F4F7FC', height: '640px' }} className="col-md-10">


                </div>
            </div>
        </div>
    );
};

export default Service;