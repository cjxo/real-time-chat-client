import styles from "../styles/route.module.css";

const Auth = ({ children }) => {
  return (
    <section className={styles.authSection}>
      {children}
    </section>
  )
};

export default Auth;
