import React from 'react';

const AllOrderData = ({ orders }) => {
    return (
        <table className="table table-borderless">
            <thead style={{ background: 'white' }}>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email Id</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Project Details</th>
                    {/* <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Email</th> */}
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) =>

                        <tr>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.product}</td>
                            <td>{order.description}</td>
                            {/* <td>{order.phone}</td>
                            <td>{order.email}</td> */}
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AllOrderData;