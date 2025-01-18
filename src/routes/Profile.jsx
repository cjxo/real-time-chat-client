import styles from "../styles/route.module.css";
import { Input0, TextArea0 } from "../components/Input"

const Profile = () => {
  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>Profile | Full Name Of User</h2>
      <div className={styles.profilePicture}>
        <img
          src="./icons/profile-placeholder-svgrepo-com.svg"
          alt="profile picture"
          className={styles.pic}
        />
      </div>
      
      <div className={styles.details}>
        <div className={styles.labelInputPair}>
          <div>
            <img
              src="./icons/user-card-svgrepo-com.svg"
              alt="user card"
            />
            <label htmlFor="first-name">First Name</label>
          </div>
          <Input0 type="text" id="first-name" defaultValue="Ada" disabled />
        </div>
        
        <div className={styles.labelInputPair}>
          <div>
            <img
              src="./icons/user-card-svgrepo-com.svg"
              alt="user card"
            />
            <label htmlFor="last-name">Last Name</label>
          </div>
          <Input0 type="text" id="last-name" defaultValue="Lovelace" disabled />
        </div>
        
        <div className={styles.labelInputPair}>
          <div>
            <img
              src="./icons/email-9-svgrepo-com.svg"
              alt="user email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <Input0 type="email" id="email" defaultValue="adalovelace@gmail.com" disabled />
        </div>

        <div className={styles.labelInputPair}>
          <div>
            <img
              src="./icons/about-description-help-svgrepo-com.svg"
              alt="about user"
            />
            <label htmlFor="bio">Bio</label>
          </div>
          <TextArea0
            id="bio"
            defaultValue="I am the first Computer Scientist"
            rows="4"
            disabled></TextArea0>
        </div>        
      </div>
      
      <div className={styles.divider}></div>
      
      <ul className={styles.moreDetails}>
        <li>
          <p>Member Since</p>
          <p>Apr 12, 2018</p>
        </li>
      </ul>
    </div>
  );
};

export default Profile;