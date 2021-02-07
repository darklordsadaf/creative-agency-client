import React, { useContext, useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';


const AddProduct = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://obscure-shore-87092.herokuapp.com/addProduct', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Service added successfully');
                }
            })
            .catch(error => {
                console.error(error)
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
                        <form onSubmit={handleSubmit}>

                            <div class="form-group mt-4">
                                <label for=""><b>Service Title</b></label>
                                <input onBlur={handleBlur} type="text" class="form-control"
                                    name="title"
                                    placeholder="Enter title" />
                            </div>
                            <div class="form-group">
                                <label for=""><b>Description</b></label>
                                <input style={{ padding: '20px 10px 200px 10px' }} onBlur={handleBlur} type="text" class="form-control" name="description" placeholder="Enter Description" />

                            </div>
                            <div class="form-group">
                                <label for=""><b>Upload Image</b></label>
                                <br />
                                <input onChange={handleFileChange} type="file" id="exampleInputPassword1" placeholder="Picture" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;