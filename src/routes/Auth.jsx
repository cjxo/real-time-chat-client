import { Navigate } from "react-router-dom";
import styles from "../styles/route.module.css";
import { useAuth } from "../context/Auth";

const Auth = ({ children }) => {
  const auth = useAuth();
  if (auth.isLoading) {
    return <>Loading...</>
  }

  if (!auth.isAuth) {
    return (
      <section className={styles.authSection}>
        {children}
      </section>
    );
  } else {
    return <Navigate to="/" />
  }
};

export default Auth;