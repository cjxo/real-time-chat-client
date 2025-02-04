import { useState } from "react";
import { Link } from "react-router-dom";
import CoolCheckbox from "./CoolCheckbox";
import styles from "../styles/component.module.css";
import { Button0 } from "./Button";
import { DotLoader } from "./Loader";
import { Input0 } from "./Input";
import { useAuth } from "../context/Auth";

const SignIn = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const email = fd.get("email");
    const password = fd.get("password");

    setIsLoading(true);
    auth.signIn(email, password).then(result => {
      if (!result.ok) {
        setError(result.message);
      }

      setIsLoading(false);
    });
  };
  
  return (
    <>
      <div className={styles.prologue}>
        <h1>Sign in to Chat App</h1>
        <p>Welcome back. Good to see you again.</p>
      </div>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <div className={styles.inputLabelPair}>
          <label htmlFor="last">Email</label>
          <Input0 type="email" placeholder="myemail@some-domain.com" id="email" name="email" required />
        </div>
        
        <div className={styles.inputLabelPair}>
          <label htmlFor="password">Password</label>
          <Input0
            type={!showPassword ? "password" : "text"}
            placeholder="Your password"
            id="password"
            name="password"
            required
          />
        </div>
        
        <div className={styles.showPassword}>
          <CoolCheckbox onChange={() => setShowPassword(!showPassword)} />
          <label htmlFor="show-password">Show Password</label>
        </div>

        <div className={`${styles.errorMsg} ${error ? styles.visible : ""}`}>{error}</div>
        <Button0>{isLoading ? <DotLoader label={"Please Wait"} /> : "Submit"}</Button0>
      </form>
      
      <p className={styles.epilogue}>Do not have an account? <Link to="/sign-up">Sign Up</Link></p>
    </>
  );
};

export default SignIn;
