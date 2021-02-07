import React, { useContext, useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // console.log(data)
        fetch('https://obscure-shore-87092.herokuapp.com/addAAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Admin Added");
                }
            })

    }
    return (
        <div>
            <AdminHeader />
            <div className="row">
                <div className="col-md-2">
                    <AdminSidebar />
                </div>
                <div style={{ backgroundColor: '#F4F7FC', height: '640px' }} className="col-md-10">
                    <div className="col-md-6">
                        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label for=""><b>Email</b></label>
                                <input type="text" ref={register({ required: true })} name="email" placeholder="jon@gmail.com" className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}

                            </div>
                            <div className="form-group">
                                <button type="submit" style={{ padding: '10px 40px', background: '#111430' }} className="btn text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;