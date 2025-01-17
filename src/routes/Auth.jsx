import styles from "../styles/route.module.css";
import { useAuth } from "../context/Auth";

const Auth = ({ children }) => {
  const auth = useAuth();

  console.log(auth);
  return (
    <section className={styles.authSection}>
      {children}
    </section>
  )
};

export default Auth;
