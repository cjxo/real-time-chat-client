import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";
import styles from "../styles/route.module.css";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";

const Homepage = () => {
  const auth = useAuth();
  if (auth.isLoading) {
    return <>Loading...</>;
  }

  if (!auth.isAuth) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <section className={styles.homepage}>
      <Topbar />
      
      <section className={styles.epicContent}>
        <Outlet />
      </section>
      
      <Bottombar />
    </section>
  );
};

export default Homepage;
