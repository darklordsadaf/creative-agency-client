import { faCommentDots, faLock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>

            <ul className="list-unstyled py-3">
                <li>
                    <Link to="/order" className="">
                        <span><FontAwesomeIcon icon={faShoppingCart} /> Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/service" className="">
                        <span><FontAwesomeIcon icon={faLock} /> Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="">
                        <span> <FontAwesomeIcon icon={faCommentDots} /> Review</span>
                    </Link>
                </li>

            </ul>

        </div>
    );
};

export default Sidebar;