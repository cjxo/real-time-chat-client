import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/component.module.css";
import { Button1 } from "./Button";
import { useAuth } from "../context/Auth";

const Sidebar = () => {
  const location = useLocation();
  const auth = useAuth();
  const [hoveredLink, setHoveredLink] = useState("");
    
  const links = [
    {
      active: "./icons/home-1-active-svgrepo-com.svg",
      inactive: "./icons/home-1-svgrepo-com.svg",
      name: "Home",
      route: "/",
    },
    {
      active: "./icons/explore-active-svgrepo-com.svg",
      inactive: "./icons/explore-svgrepo-com.svg",
      name: "Explore",
      route: "/explore",
    },    
    {
      active: "./icons/profile-1341-active-svgrepo-com.svg",
      inactive: "./icons/profile-1341-svgrepo-com.svg",
      name: "Profile",
      route: "/profile",
    },
  ];
  
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img
          src="./icons/chat-square-call-svgrepo-com.svg"
          alt="Chat App Icon"
        />
        <h1>Chat App</h1>
      </div>
      
      <ul className={styles.linkedList}>
        {links.map(({ active, inactive, name, route }) => {
          const isActive = (route === location.pathname) || (hoveredLink === route);
          return (
            <li key={name}>
              <Link
                to={route}
                className={isActive ? styles.active : "" }
                onMouseEnter={() => setHoveredLink(route)}
                onMouseLeave={() => setHoveredLink("")}
              >
                <img
                  src={isActive ? active : inactive}
                  alt={name + " icon"}
                />
                <p>{name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      
      <Button1 onClick={() => auth.signOut()}>
        <img
          src="./icons/logout-2-svgrepo-com.svg"
          alt="sign out icon"
        />
        <p>Sign Out</p>
      </Button1>
    </div>
  );
};

export default Sidebar;