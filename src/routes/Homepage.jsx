import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Homepage = () => {
  const auth = useAuth();
  if (auth.isLoading) {
    return <>Loading...</>;
  }

  if (!auth.isAuth) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <>Welcome Home</>
  );
};

export default Homepage;
