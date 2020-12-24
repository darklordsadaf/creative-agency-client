import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-light">
                <Link className="pl-5 ml-5" to="/">
                    <img style={{ width: "150px", height: "47px" }} src={logo} alt="" />
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class=" navbar-nav ml-auto mr-5">
                        <li class="nav-item">
                            <Link class="nav-link mr-4" to="/"><b>Home</b></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-4" href="#"><b>Our Portfolio</b></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-4" ><b>Our Team</b></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-4" href="/login"><b>Contact us</b></Link>
                        </li>
                        <li class="nav-item">
                            {loggedInUser.isSignedIn ? <Link to='/' style={{ background: '#111430', borderRadius: '5px' }} class="nav-link mr-4 text-white px-5" onClick={() => setLoggedInUser({})}>Log Out</Link> :
                                <Link to="/login" style={{ background: '#111430', borderRadius: '5px' }} class="nav-link mr-4 text-white px-5" >Login</Link>
                            }



                        </li>

                        <li class="nav-item">
                            <div style={{ margin: '9px 10px 0px 10px' }}>
                                {loggedInUser.photo &&
                                    <img style={{ borderRadius: '50%', marginTop: '-10px' }} src={loggedInUser.photo} alt="" width="55" />

                                }
                            </div>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;