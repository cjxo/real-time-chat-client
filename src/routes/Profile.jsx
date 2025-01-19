import { useState, useRef, useEffect } from "react";
import styles from "../styles/route.module.css";
import { Input0, TextArea0 } from "../components/Input"
import { Button1 } from "../components/Button"
import { useAuth } from "../context/Auth";
import Loader from "../components/Loader";

const Profile = () => {
  const auth = useAuth();
  const inputRef = useRef({});
  const [editingField, setEditingField] = useState("");
  const [isUpdatingField, setIsUpdatingField] = useState(false);
  const user = auth.user;
  const date = new Date(user.joined_date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  const inputs = [
    {
      field: "first_name",
      label: "First Name",
      type: "text",
      value: user.first_name,
      src: "./icons/profile-placeholder-svgrepo-com.svg",
    },
    {
      field: "last_name",
      label: "Last Name",
      type: "text",
      value: user.last_name,
      src: "./icons/profile-placeholder-svgrepo-com.svg",
    },
    {
      field: "email",
      label: "Email",
      type: "email",
      value: user.email,
      src: "./icons/email-9-svgrepo-com.svg"
    },
    {
      field: "bio",
      label: "Bio",
      type: "textarea",
      value: user.bio,
      src: "./icons/about-description-help-svgrepo-com.svg"
    },
  ];
  
  const handleCancelEditField = () => {
    const currRef = inputRef.current[editingField];
    currRef.value = user[editingField];
    setEditingField("");
  };
  
  const handleEditField = (field) => {
    if (field === editingField) {
      const currRef = inputRef.current[field];
      // meaning, toggle edit.
      if (currRef.value !== user[field]) {
        // actually change the field
        const opts = {};
        opts[field] = currRef.value;
        setIsUpdatingField(true);
        auth
          .update(opts)
          .then(result => {
            setEditingField("");
            setIsUpdatingField(false);
          });
      } else {
        setEditingField("");
        // no need change, since theyre equal. That is, ignore.
      }
      
    } else {
      if (editingField) {
        const currRef = inputRef.current[editingField];
        currRef.value = user[editingField];
      }
      
      setEditingField(field);
    }
  };
  
  useEffect(() => {
    if (editingField) {
      inputRef.current[editingField].focus();
    }
  }, [editingField]);
  
  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>Profile</h2>
      <div className={styles.profilePicture}>
        <img
          src="./icons/profile-placeholder-svgrepo-com.svg"
          alt="profile picture"
          className={styles.pic}
        />
        <p>{user.first_name + " " + user.last_name}</p>
      </div>
      
      <div className={styles.details}>
        {inputs.map(({ field, label, type, value, src }) => (
          <div className={styles.labelInputPair} key={field}>
            <div>
              <img
                src={src}
                alt={label}
              />
              <label htmlFor={field}>{label}</label>
              <div>
                {(editingField === field) ? (
                  isUpdatingField ? <Loader /> : (
                    <>
                      <Button1
                        type="button"
                        onClick={handleCancelEditField}
                      >
                        <img
                          src="./icons/cancel-svgrepo-com.svg"
                          alt="cancel edit field"
                        />
                      </Button1>
                      <Button1
                        type="button"
                        onClick={() => handleEditField(field)}
                        disabled={isUpdatingField}
                      >
                        <img
                          src="./icons/done-all-round-svgrepo-com.svg"
                          alt="edit field"
                        />
                      </Button1>
                    </>
                  )
                ) : (
                  <Button1
                    type="button"
                    onClick={() => handleEditField(field)}
                    disabled={isUpdatingField}
                  >
                    <img
                      src="./icons/edit-3-svgrepo-com.svg"
                      alt="edit field"
                    />
                  </Button1>
                )}
              </div>
            </div>
            {type === "textarea" ? (
              <TextArea0
                id="bio"
                defaultValue={user.bio}
                rows="4"
                disabled={editingField !== field}
                className={(editingField === field) ? styles.focused : ""}
                anotherRefBecauseWebDevSucks={(el) => inputRef.current[field] = el}
              ></TextArea0>
            ) : (
              <Input0
                type={type}
                id={field}
                defaultValue={value}
                disabled={editingField !== field}
                className={(editingField === field) ? styles.focused : ""}
                anotherRefBecauseWebDevSucks={(el) => inputRef.current[field] = el}
              />
            )}
          </div>
        ))}
      </div>
      
      <div className={styles.divider}></div>
      
      <ul className={styles.moreDetails}>
        <li>
          <p>Member Since</p>
          <p>{date}</p>
        </li>
        
        <li>
          <p>Status</p>
          <p>Active 1hr ago</p>
        </li>
      </ul>
    </div>
  );
};

export default Profile;