import { useAuth } from "../context/Auth";
import { useResize } from "../context/Resize";
import styles from "../styles/component.module.css";
import routeStyles from "../styles/route.module.css";
const MessageHistory = ({ reciever, messages }) => {
  const { user } = useAuth();
  const { msgListHeight } = useResize();
  
  return (
    <ul
      className={styles.messagingList}
      style={{ maxHeight: msgListHeight }}
    >
      {messages.map(message => {
        const date = new Date(message.time_sent).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
        const currUser = (user.id === message.sender_id);
        return <li
          key={message.id}
          className={currUser ? styles.right : styles.left}
        >
          <div className={styles.left}>
            <img
              src={currUser ? (user.profile_pic_name || "./icons/profile-circle-svgrepo-com.svg") : (reciever.profile_pic_name || "./icons/profile-circle-svgrepo-com.svg") }
              alt="profile picture"
            />
          </div>
          <div className={styles.right}>
            <p>{date}</p>
            <p className={styles.msg}>{message.content}</p>
          </div>
        </li>
      })}
    </ul>
  );
};

export default MessageHistory;