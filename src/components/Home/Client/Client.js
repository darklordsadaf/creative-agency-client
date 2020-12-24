import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const Client = () => {
    return (
        <section className=" d-flex justify-content-center row mt-5 mb-5">
            <div className="d-flex mt-5  flex-row">
                <img
                    style={{ width: "140px", height: "36px" }}
                    className="mx-5"
                    src={slack}
                    alt=""
                />
                <img
                    style={{ width: "129px", height: "44px" }}
                    className="mx-5"
                    src={google}
                    alt=""
                />
                <img
                    style={{ width: "99px", height: "56px" }}
                    className="mx-5"
                    src={uber}
                    alt=""
                />
                <img
                    style={{ width: "120px", height: "67px" }}
                    className="mx-5"
                    src={netflix}
                    alt=""
                />
                <img
                    style={{ width: "161px", height: "51px" }}
                    className="mx-4"
                    src={airbnb}
                    alt=""
                />
            </div>
        </section>
    );
};

export default Client;