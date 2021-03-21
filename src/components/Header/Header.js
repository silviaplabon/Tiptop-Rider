import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser, "silvialogin")
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  navbarDesign container pt-5">
        <div className="container-fluid">
          <h2 className="navbar-brand text-warning" href="#">Tiptop Rides</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/Motor_Bike/destination" className="nav-link">Destination</Link>
              <Link to="/blog" className=" nav-link">Blog</Link>
              <Link to="/contact" className="nav-link">Contact</Link>

              {loggedInUser.email && (loggedInUser.displayName ? <button className="btn btn-warning me-2  buttonStyleHeader">{loggedInUser.displayName}</button>
                : <button className="btn btn-warning me-2  buttonStyle">{loggedInUser.email}</button>)}

              {loggedInUser.email ? <button onClick={() => setLoggedInUser({})} className="btn btn-warning logStyle  buttonStyleHeader me-1">Logout</button> :
                <Link to="/login" className="btn btn-warning me-1 buttonStyleHeader">Login</Link>
              }

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};


export default Header;