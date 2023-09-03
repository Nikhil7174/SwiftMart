import "./WidgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  // console.log(users)
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user:any) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||"https://as2.ftcdn.net/v2/jpg/02/10/70/13/1000_F_210701394_juARL2AoYEzgYZWI5zHmcGXmqWwQS8L2.jpg"
                // "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}