import React from 'react';

const FeedbackCard = ({ feedback }) => {
    return (
        <div style={{ border: '1px solid lightGray' }} className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={feedback.img} alt="" width="70" />
                <div>
                    <h5><b>{feedback.name}</b></h5>
                    <p className="m-0"> <b>{feedback.designation}</b> </p>
                </div>
            </div>
            <div style={{ marginTop: '-40px' }} className="card-body">
                <p className="card-text text-secondary mt-4">{feedback.description}</p>
            </div>

        </div>
    );
};

export default FeedbackCard;