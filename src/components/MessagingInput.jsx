import PropTypes from "prop-types";
import { useState } from "react";
import { Input0 } from "./Input";
import { Button1 } from "./Button";
import styles from "../styles/component.module.css";

import api from "../lib/api";

const MessagingInput = ({ user, addNewMessage }) => {
  const [isSending, setIsSending] = useState(false);
  const [text, setText] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const fd = new FormData(e.target);
    const message = fd.get("message");
    setText("");
    setIsSending(true);
    api.message.send(user.id, message).then(result => {
      setIsSending(false);
      if (result.ok) {
        addNewMessage(result.newMessage);
      } else {
        
      }
    });
  };

  return (
    <form
      className={styles.messagingInput}
      onSubmit={handleSubmit}
    >
      <Input0
        disabled={isSending}
        placeholder="Send message..."
        name="message"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button1 disabled={isSending || !!!text}>
        <img
          src={!!text ? "./icons/send-2-svgrepo-com.svg" : "./icons/send-2-disabled-svgrepo-com.svg"}
          alt="send message"
        />
      </Button1>
    </form>
  );
};

export default MessagingInput;

MessagingInput.propTypes = {
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
