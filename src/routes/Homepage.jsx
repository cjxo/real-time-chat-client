import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { useResize } from "../context/Resize";
import styles from "../styles/route.module.css";
import compStyles from "../styles/component.module.css";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";

const Homepage = () => {
  const auth = useAuth();
  const { epicContentHeight } = useResize();

  if (auth.isLoading) {
    return <>Loading...</>;
  }

  if (!auth.isAuth) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <section className={styles.homepage}>
      <Topbar />
      <Sidebar />
      
      <section
        className={styles.epicContent}
        style={{ maxHeight: epicContentHeight }}
      >
        <Outlet />
      </section>
      
      <Bottombar />
    </section>
  );
};

export default Homepage;
