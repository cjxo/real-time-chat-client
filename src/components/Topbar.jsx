import styles from "../styles/component.module.css";
import { useAuth } from "../context/Auth";

const Topbar = () => {
  const auth = useAuth();
  
  const handleSignOut = () => {
    auth.signOut();
  };
  
  return (
    <nav className={styles.topbar}>
      <div className={styles.logo}>
        <img
          src="./icons/chat-square-call-svgrepo-com.svg"
          alt="Chat App Icon"
        />
        <h1>Chat App</h1>
      </div>

      <button type="button" onClick={handleSignOut}>
        <img
          src="./icons/logout-2-svgrepo-com.svg"
          alt="Sign Out icon"
        />
      </button>
    </nav>
  );
};

export default Topbar;