import styles from "../styles/component.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MessagingHeader = ({ user }) => {
  const fullname = user.first_name + " " + user.last_name;
  return (
    <div className={styles.messagingHeader}>
      <div className={styles.left}>
        <img
          src={user.profile_pic_name || "./icons/profile-circle-svgrepo-com.svg"}
          alt={`${fullname}'s profile picture`}
        />
        <h2 className={styles.name}>{fullname}</h2>
      </div>
      
      <div className={styles.right}>
        <Link to="/">
          <img
            src="./icons/close-svgrepo-com.svg"
            alt="close message"
          />
        </Link>
      </div>
    </div>
  );
};

export default MessagingHeader;

MessagingHeader.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    added: PropTypes.bool.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    joined_date: PropTypes.string.isRequired,
    update_date: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
  }).isRequired,
};