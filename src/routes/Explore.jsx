import { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import compStyles from "../styles/component.module.css";
import { Button0 } from "../components/Button";
import styles from "../styles/route.module.css";
import api from "../lib/api";

const Explore = () => {
  const [users, setUsers] = useState([]);
  
  useState(() => {
    api.user.getAll().then(result => {
      if (result.ok) {
        setUsers(result.users);
        console.log(result.users);
      } else {
        console.error(result.message);
      }
    });
  }, []);
  
  const handleAddUser = (id) => {
    api.user.add(id).then(result => {
      if (result.ok) {
        const newUsers = [...users];
        const idx = newUsers.findIndex(element => element.id === id);
        newUsers[idx].added = true;
        setUsers(newUsers);
      } else {
        console.log(result.message);
      }
    });
  };
  
  return (
    <section className={styles.explore}>
      <h2 className={styles.title}>Explore</h2>
      <Searchbar />
      
      <ul className={styles.userList}>
        {users.map(user => (
          <li key={user.id}>
            <div className={styles.left}>
              <img
                src="./icons/profile-circle-svgrepo-com.svg"
                alt="user profile"
              />
            </div>
            <div className={styles.right}>
              <p>{user.first_name + " " + user.last_name}</p>
              
              <div className={styles.buttons}>
                <Link className={compStyles.button0}>View Profile</Link>
                <Button0
                  onClick={() => handleAddUser(user.id)}
                  disabled={user.added}
                >{user.added ? "Already Added" : "Add To Message"}</Button0>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Explore;