import { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import styles from "../styles/route.module.css";
import MessagingHeader from "../components/MessagingHeader";
import MessageHistory from "../components/MessageHistory";
import MessagingInput from "../components/MessagingInput";

import api from "../lib/api";
import { useAuth } from "../context/Auth";

const Messaging = () => {
  const { id } = useParams();
  const location = useLocation();
  const [messageState, setMessageState] = useState({user: {}, messages:[]});
  const messages = messageState.messages;
  const user = messageState.user;
  const { socket, subscribeToMessage, unsubscribeToMessage } = useAuth();

  useEffect(() => {
    api.message.get(id).then(result => {
      if (result.ok) {
        setMessageState(result.theMessage[0])
        console.log(result.theMessage[0])
        subscribeToMessage(id);
      } else {
        console.error(result.message);
      }
    });

    return () => unsubscribeToMessage(id)
  }, [subscribeToMessage]);
  
  // locally only...
  const handleAddNewMessage = (message) => {
    setMessageState({ user, messages: [...messages, message] })
    socket.emit("chat message", message);
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
