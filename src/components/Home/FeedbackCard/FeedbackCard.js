import React from 'react';

const FeedbackCard = ({ feedback }) => {
    return (
        <div style={{ border: '1px solid lightGray' }} className="card shadow-sm col-md-3 m-3">
            <div className="card-header d-flex  align-items-center">
                <img style={{ borderRadius: '50%' }} className="mr-3" src={feedback.img} alt="" width="60" />
                <div className="text-left">
                    <h6><b>{feedback.name}</b></h6>
                    <p className="m-0"> <b>{feedback.company}</b> </p>
                </div>
            </div>
            <div style={{ marginTop: '-40px' }} className="card-body">
                <p className="card-text text-secondary mt-4">{feedback.description}</p>
            </div>

        </div>
    );
};

export default FeedbackCard;