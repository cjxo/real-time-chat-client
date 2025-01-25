import { useNavigate } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import api from "../lib/api";
import { io } from "socket.io-client";

const AuthContext = createContext({
  isLoading: true,
  isAuth: false,
  user: {},
  signIn: async (email, password) => {
    return { ok: false, message: "" };
  },
  signUp: async (first_name, last_name, email, password) => {
    return { ok: false, message: "" };
  },
  signOut: async () => {
    return { ok: false, message: "" };
  },
  update: async (opts) => {
    return { ok: false, message: "" };
  },
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await api.auth.isAuth();
      setIsLoading(false);
      if (result.ok && (result.remainingTime > 0)) {
        const bufferTime = 10;
        const reloadTime = (result.remainingTime - bufferTime) * 1000;
        console.log(result.remainingTime);
        if (reloadTime > 0) {
          setUser(result.user);
          setIsAuth(result.ok);
          sockIoConnect(result.user.id);

          const timer = setTimeout(() => {
            signOut().then(() => navigate("/sign-in"));
          }, reloadTime);

          return () => clearTimeout(timer);
        } else {
          signOut();
        }
      }
    };

    checkAuth();
  }, []);

  const sockIoConnect = (userId) => {
    if (!socket) {
      const newSocket = io(api.getUrl(""), {
        query: {
          userId
        },
      });
      newSocket.connect();
      setSocket(newSocket);
    }
  };

  const sockIoDisconnect = () => {
    if (socket?.connected) {
      socket.disconnect();
    }
  };

  const subscribeToMessage = (toUserId) => {
    if (socket?.connected) {
      socket.on("new message", (message) => {
        //if (parseInt(message.sender_id) !== toUserId) {
          console.log(message);
          setMessages((prevMessage) => [...prevMessage, message]);
        //}
      });
    }
  };

  const unsubscribeToMessage = (toUserId) => {
    if (socket?.connected) {
      socket.off("new message");
    }
  };

  const signIn = async (email, password) => {
    const result = await api.auth.signIn(email, password);
    if (result.ok) {
      setUser(result.user);
      setIsAuth(true);
      sockIoConnect(result.user.id);
      navigate("/"); 
    }

    setIsLoading(false);
    return result;
  };

  const signOut = async () => {
    const result = await api.auth.signOut();
    setIsAuth(false)
    navigate("/sign-in");
    sockIoDisconnect();
    return result;
  }; 

  const signUp = async (first_name, last_name, email, password) => {
    const result = await api.auth.signUp(first_name, last_name, email, password);
    if (result.ok) {
      navigate("/sign-in");
    }
    return result;
  };
  
  const update = async (opts) => {
    const result = await api.user.update(opts);
    if (result.ok) {
      setUser(result.user);
    }
    
    return result;
  };

  return (
    <AuthContext.Provider value={{ isLoading, isAuth, user, signIn, signUp, signOut, update, socket, subscribeToMessage, unsubscribeToMessage  }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
