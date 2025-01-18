import { Link, useLocation } from "react-router-dom";
import styles from "../styles/component.module.css";

const Bottombar = () => {
  const location = useLocation();
  
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
    <ul className={styles.bottombar}>
      {links.map(({ active, inactive, name, route }) => {
        const isActive = route === location.pathname;
        return (
          <li key={name}>
            <Link
              to={route}
              className={isActive ? styles.active : ""}
            >
              <img
                src={isActive ? active : inactive}
                alt={`${name} icon`}
              />
              <p>{name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Bottombar;