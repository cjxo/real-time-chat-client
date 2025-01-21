import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/route.module.css";
import Searchbar from "../components/Searchbar";
import api from "../lib/api";

const Home = () => {
  const [messages, setMessages] = useState([]);
  
  useState(() => {
    api.message.getAll().then(result => {
      if (result.ok) {
        setMessages(result.messages);
        console.log(result.messages);
      } else {
        console.error(result.message);
      }
    });
  }, []);
  
  return (
    <section className={styles.home}>
      <h2 className={styles.title}>Messages</h2>
      <Searchbar />
      <ul>
        {messages.map(message => {
          return <li key={message.user.id}>
            <Link to={`message/${message.user.id}`}>
              <div className={styles.left}>
                <img
                  src="./icons/profile-circle-svgrepo-com.svg"
                  alt="profile"
                />
              </div>
              
              <div className={styles.right}>
                <p className={styles.name}>{message.user.first_name + " " + message.user.last_name}</p>
                <p className={styles.recentMessage}>no messages</p>
              </div>
            </Link>
          </li>
        })}
      </ul>
    </section>
  );
};

export default Home;
