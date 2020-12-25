import { faUserPlus, faLock, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>

            <ul className="list-unstyled py-3">
                <li>
                    <Link to="/admin/order" className="">
                        <span><FontAwesomeIcon icon={faLock} /> Service List</span>
                    </Link>
                </li>

                <li>
                    <Link to="/admin/service" className="">
                        <span><FontAwesomeIcon icon={faPlus} /> Add Service</span>
                    </Link>
                </li>

                <li>
                    <Link to="/admin/add" className="">
                        <span> <FontAwesomeIcon icon={faUserPlus} /> Make Admin</span>
                    </Link>
                </li>

            </ul>

        </div>
    );
};

export default AdminSidebar;