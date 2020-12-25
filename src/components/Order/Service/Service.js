import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceCard from '../../Order/ServiceCard/ServiceCard';
import OrderHeader from '../OrderHeader/OrderHeader';
import Sidebar from '../Sidebar/Sidebar';

const Service = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://stormy-lake-67297.herokuapp.com/orderByEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, [loggedInUser.email])

    console.log(order);
    return (
        <div>
            <OrderHeader />
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div style={{ backgroundColor: '#F4F7FC', height: '640px' }} className="col-md-10">


                    <div className="row p-5">
                        {
                            order.map(pd => <ServiceCard pd={pd}></ServiceCard>)
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;