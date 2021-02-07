import React, { useContext } from 'react';
import OrderHeader from '../OrderHeader/OrderHeader';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // console.log(data)
        data.email = loggedInUser.email;
        fetch('https://obscure-shore-87092.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Order Created Successfully");
                }
            })

    }
    return (
        <div>
            <OrderHeader />
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div style={{ backgroundColor: '#F4F7FC', height: '640px' }} className="col-md-10">
                    <div className="col-md-6">

                        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}

                            </div>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="" placeholder="Email" className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="product" placeholder="Graphic Design" className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input style={{ padding: '20px 10px 200px 10px' }} type="text" ref={register({ required: true })} name="description" placeholder="Project details" className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group row">

                                <div className="col-4">
                                    <input ref={register({ required: true })} className="form-control" name="price" placeholder="Price" type="number" />
                                    {errors.age && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="col-4">
                                    <input name="" type="file" />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" style={{ padding: '10px 40px', background: '#111430' }} className="btn text-white">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;