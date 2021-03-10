import React from "react";
import {Link , NavLink} from "react-router-dom";

const Navbar = ()=> {
return(
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container">
    <NavLink  className="navbar-brand" to="/">
        React User
    </NavLink>
    <button 
    className="navbar-toggler" 
    type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent"
    aria-expanded="false" 
    aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
         <li className="nav-item active" >
            <NavLink className="nav-link" exact to="/">
                Home
            </NavLink>
          </li>
          <li className="nav-item " >
            <NavLink className="nav-link" exact to="/About">
                About
            </NavLink>
          </li>
          <li className="nav-item " >
            <NavLink className="nav-link" exact to="/Contact">
                Contact
            </NavLink>
          </li>
    </ul>
    </div>
    <Link className="btn btn-outline-light" to="/users/add">Add Users</Link>
    
  </div>
</nav>
)
}
export default Navbar;
