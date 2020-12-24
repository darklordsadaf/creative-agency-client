import React from 'react';

const Contact = () => {
    return (
        <section style={{ marginTop: '150px', padding: '50px' }} className="d-flex justify-content-center color-yellow">
            <div className="container row d-flex">
                <div className="mb-5 col-md-5 offset-md-1">
                    <h1 ><b>Let us handle your <br /> project, professionally.</b></h1>
                    <p className=" my-4">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="mx-auto col-md-6">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your email address" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your name / company's name" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                        </div>
                        <div className="form-group">
                            <button style={{ padding: '10px 40px', background: '#111430' }} type="button" className="btn text-white"> <b> Submit</b> </button>
                        </div>

                    </form>

                </div >

            </div>

        </section>
    );
};

export default Contact;