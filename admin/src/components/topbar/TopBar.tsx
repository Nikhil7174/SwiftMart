import React from "react";
import "./TopBar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/apiCalls";
import { Navigate, useNavigate } from "react-router-dom";

export default function Topbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogout = (e:any) => {
    e.preventDefault();
    dispatch(logout);
    navigate('/login');      
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SwiftAdmin</span>
        </div>
        <div className="topRight">
          <Button onClick={handleLogout}>Logout</Button>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <a href="/"  className="link" style={{color:"#646161", textDecoration:"none"}}>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          </a>
          <a href="/"  className="link" style={{color:"#646161", textDecoration:"none"}}>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          </a>
        </div>
      </div>
    </div>
  );
}