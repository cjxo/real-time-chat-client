import { useNavigate } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import api from "../lib/api";

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
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const checkAuth = async () => {
      const result = await api.auth.isAuth();
      setIsAuth(result.ok);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const signIn = async (email, password) => {
    const result = await api.auth.signIn(email, password);
    if (result.ok) {
      setUser(result.user);
      setIsAuth(true);
      navigate("/");
    }

    setIsLoading(false);
    return result;
  };

  const signUp = async (first_name, last_name, email, password) => {
    const result = await api.auth.signUp(first_name, last_name, email, password);
    if (result.ok) {
      navigate("/sign-in");
    }
    return result;
  };

  const signOut = async () => {
    const result = await api.auth.signOut();
    setIsAuth(false)
    navigate("/sign-in");
    return result;
  };

  return (
    <AuthContext.Provider value={{ isLoading, isAuth, user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
