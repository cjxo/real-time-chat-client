import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "../styles/route.module.css";
import MessagingHeader from "../components/MessagingHeader";
import MessageHistory from "../components/MessageHistory";
import MessagingInput from "../components/MessagingInput";

import api from "../lib/api";
const Messaging = () => {
  const location = useLocation();
  const [messages, setMessages] = useState(location.state.messages);
  const message = location.state;
  const user = message.user;
  
  console.log(messages);
  
  // locally only...
  const handleAddNewMessage = (message) => {
    setMessages([...messages, message]);
  };
  
  return (
    <section className={styles.messaging}>
      <MessagingHeader user={user} />
      <MessageHistory reciever={user} messages={messages} />
      <MessagingInput
        user={user}
        addNewMessage={handleAddNewMessage}
      />
    </section>
  );
};

export default Messaging;