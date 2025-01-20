import { Link } from "react-router-dom";
import styles from "../styles/route.module.css";
import { Input0 } from "../components/Input";

const Home = () => {
  return (
    <section className={styles.home}>
      <h2 className={styles.title}>Messages</h2>
      <div className={styles.searchBar}>
        <img
          src="./icons/search-alt-2-svgrepo-com.svg"
          alt="search"
        />
        <Input0 type="search" placeholder="Search" />
      </div>
      
      <ul>
        <li>
          <Link to="message/1">
            <div className={styles.left}>
              <img
                src="./icons/profile-circle-svgrepo-com.svg"
                alt="profile"
              />
            </div>
            
            <div className={styles.right}>
              <p className={styles.name}>Name</p>
              <p className={styles.recentMessage}>Recent Message</p>
            </div>
          </Link>
        </li>
        
        <li>
          <Link to="message/1">
            <div className={styles.left}>
              <img
                src="./icons/profile-circle-svgrepo-com.svg"
                alt="profile"
              />
            </div>
            
            <div className={styles.right}>
              <p className={styles.name}>Name</p>
              <p className={styles.recentMessage}>Recent Message</p>
            </div>
          </Link>
        </li>
        
        <li>
          <Link to="message/1">
            <div className={styles.left}>
              <img
                src="./icons/profile-circle-svgrepo-com.svg"
                alt="profile"
              />
            </div>
            
            <div className={styles.right}>
              <p className={styles.name}>Name</p>
              <p className={styles.recentMessage}>Recent Message</p>
            </div>
          </Link>
        </li>
        
        <li>
          <Link to="message/1">
            <div className={styles.left}>
              <img
                src="./icons/profile-circle-svgrepo-com.svg"
                alt="profile"
              />
            </div>
            
            <div className={styles.right}>
              <p className={styles.name}>Name</p>
              <p className={styles.recentMessage}>Recent Message</p>
            </div>
          </Link>
        </li>
        
        <li>
          <Link to="message/1">
            <div className={styles.left}>
              <img
                src="./icons/profile-circle-svgrepo-com.svg"
                alt="profile"
              />
            </div>
            
            <div className={styles.right}>
              <p className={styles.name}>Name</p>
              <p className={styles.recentMessage}>Recent Message</p>
            </div>
          </Link>
        </li>
        
        <li>
          <Link to="message/1">
            <div className={styles.left}>
              <img
                src="./icons/profile-circle-svgrepo-com.svg"
                alt="profile"
              />
            </div>
            
            <div className={styles.right}>
              <p className={styles.name}>Name</p>
              <p className={styles.recentMessage}>Recent Message</p>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Home;
