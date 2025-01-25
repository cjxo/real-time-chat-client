import { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import styles from "../styles/route.module.css";
import MessagingHeader from "../components/MessagingHeader";
import MessageHistory from "../components/MessageHistory";
import MessagingInput from "../components/MessagingInput";
import Loader from "../components/Loader";

import api from "../lib/api";
import { useAuth } from "../context/Auth";

const Messaging = () => {
  const location = useLocation();
  const [messageState, setMessageState] = useState({user: {}, messages:[]});
  const [isLoading, setIsLoading] = useState(true);
  const { socket, subscribeToMessage, unsubscribeToMessage } = useAuth();
  const messages = messageState.messages;
  const user = messageState.user;
  const userId = location.state;

  useEffect(() => {
    api.message.get(userId).then(result => {
      if (result.ok) {
        setMessageState(result.theMessage)
        subscribeToMessage(userId);
      } else {
        console.error(result.message);
      }
      setIsLoading(false);
    });

    return () => unsubscribeToMessage(userId)
  }, [subscribeToMessage]);
  
  // locally only...
  const handleAddNewMessage = (message) => {
    setMessageState({ user, messages: [...messages, message] })
  };
  
  return (
    <section className={styles.messaging}>
      {!isLoading ? (
        <>
          <MessagingHeader user={user} />
          <MessageHistory reciever={user} messages={messages} />
          <MessagingInput
            user={user}
            addNewMessage={handleAddNewMessage}
          />
        </>
      ) : (
        <Loader className={styles.loading} />
      )}
    </section>
  );
};

export default Messaging;
