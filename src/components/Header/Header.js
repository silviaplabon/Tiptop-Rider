import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser,"silvialogin")
  return (
    <nav className="navbar navbar-expand navbar-light  navStyle pb-1 pt-5 mx-5 px-5">
      <div className="container-fluid">
        <div className="collapse navbar-collapse navbarCollapseStyle d-flex flex-row-reverse text-center" >
          <ul className="navbar-nav ulHeaderStyle text-center">
            <li className="nav-item liHeaderStyle  btn">
              <Link to="/" className="text-decoration-none linkStyle">Home</Link>
            </li>
            <li className="nav-item liHeaderStyle btn">
              <Link to="/vehicle/Motor_Bike" className="text-decoration-none linkStyle">Destination</Link>
            </li>
            <li className="nav-item liHeaderStyle btn">
              <Link to="/blog" className=" text-decoration-none   linkStyle">Blog</Link>
            </li>
            <li className="nav-item liHeaderStyle btn">
              <Link to="/contact" className="text-decoration-none linkStyle">Contact</Link>
            </li>
            {
              loggedInUser.email ?
              (loggedInUser.displayName ?  <button onClick={() => setLoggedInUser({})} className="nameShow">{loggedInUser.displayName}</button>:
              <button onClick={() => setLoggedInUser({})} className="nameShow ">{loggedInUser.email}</button>):
                <li className="nav-item liHeaderStyle btn btn-primary">
                    <Link to="/login" className="text-decoration-none  linkStyle ">Login</Link>
                </li>
            }

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;