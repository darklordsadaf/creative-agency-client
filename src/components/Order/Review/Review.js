import React from 'react';
import OrderHeader from '../OrderHeader/OrderHeader';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    return (
        <div>
            <OrderHeader />
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div style={{ backgroundColor: '#F4F7FC', height: '640px' }} className="col-md-10">
                    <div className="col-md-6">
                        <form className="mt-5" action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Company's name, Designation" />
                            </div>

                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Description"></textarea>
                            </div>

                            <div className="form-group">
                                <button style={{ padding: '10px 40px', background: '#111430' }} type="button" className="btn text-white"> <b> Submit</b> </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;