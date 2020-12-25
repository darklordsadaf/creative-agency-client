import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const AdminHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section className='row'>
            <div className="col-md-2 mt-3">
                <Link className="pl-5 ml-5" to="/">
                    <img style={{ width: "150px", height: "47px" }} src={logo} alt="" />
                </Link>
            </div>
            <div className="col-md-8 pl-5 pt-4">
                <h5><b>Admin</b></h5>
            </div>
            <div className="col-md-2 mt-2">
                <div style={{ margin: '20px 10px 0px 100px', color: 'black' }}>
                    <b> {loggedInUser.name && loggedInUser.name.split(" ").slice(0, 1)}{" "}</b>
                </div>
            </div>
        </section>
    );
};

export default AdminHeader;