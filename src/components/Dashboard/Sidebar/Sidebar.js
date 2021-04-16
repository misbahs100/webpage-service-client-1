import { faCalendar, faCog, faFileAlt, faGripHorizontal, faHome, faServer, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-warning">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-warning">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {/* {isDoctor && */}
                <div>
                    <li>
                        <Link to="/allPatients" className="text-warning">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/patient" className="text-warning">
                            <FontAwesomeIcon icon={faUsers} /> <span>Customers</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/prescriptions" className="text-warning">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Reviewers</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin" className="text-warning" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-warning" >
                            <FontAwesomeIcon icon={faServer} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" className="text-warning" >
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                </div>
                {/* }  */}
            </ul>
            <div>
                <Link to="/" className="text-warning"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;