import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-linkedin"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topMiddle">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link" onClick={handleLogout}>
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings" className="link">
            <img
              className="topImage"
              src={PF + user.profilePic}
              alt="profile_img"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
