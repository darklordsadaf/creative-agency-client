import React from 'react';

const ServiceCard = ({ pd }) => {
    return (
        <div style={{ border: '1px solid lightGray' }} className="m-4">
            <div className="card-header d-flex  align-items-center">
                <div className="text-left">
                    <h4><b>{pd.product}</b></h4>
                    <p className="card-text text-secondary mt-4">{pd.description}</p>
                </div>
            </div>


        </div>
    );
};

export default ServiceCard;