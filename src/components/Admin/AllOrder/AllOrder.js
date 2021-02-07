import React, { useEffect, useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import AllOrderData from '../AllOrderData/AllOrderData';

const AllOrder = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://obscure-shore-87092.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <AdminHeader />
            <div className="row">
                <div className="col-md-2">
                    <AdminSidebar />
                </div>
                <div style={{ backgroundColor: '#F4F7FC', height: '640px' }} className="col-md-10 pt-4">
                    <div className="col-md-12">
                        <AllOrderData orders={orders}></AllOrderData>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrder;