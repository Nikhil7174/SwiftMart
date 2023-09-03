import "./SideBar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {/* <Link to="/" className="link"> */}
            <a href="/"  className="link" style={{color:"#646161", textDecoration:"none"}}>
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </a>
            {/* </Link> */}
            <a href="/"  className="link" style={{color:"#646161", textDecoration:"none"}}>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            </a>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            {/* <Link to="/users" className="link"> */}
            <a href="/user"  className="link" style={{color:"#646161", textDecoration:"none"}}>
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
              </a>
            {/* </Link> */}

            {/* <Link to="/products" className="link"> */}
            <a href="/products"  className="link" style={{color:"#646161", textDecoration:"none"}}>
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
              </a>
              <a href="/newProduct"  className="link" style={{color:"#646161", textDecoration:"none"}}>
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Add Products
              </li>
              </a>
            {/* </Link> */}
            <a href="/"  className="link" style={{color:"#646161", textDecoration:"none"}}>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            </a>
            <a href="/"  className="link" style={{color:"#646161", textDecoration:"none"}}>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
            </a>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
          <a href="/"  className="link" style={{color:"#646161", textDecoration:"none"}}>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            </a>
            <a href="/"  className="link" style={{color:"#646161", textDecoration:"none"}}>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            </a>
            <a href="/"  className="link" style={{color:"#646161", textDecoration:"none"}}>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}