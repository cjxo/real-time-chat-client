import { useState } from "react";
import CoolCheckbox from "./CoolCheckbox";
import styles from "../styles/component.module.css";
import { Button0 } from "./Button";
import { Input0 } from "./Input";
import { useAuth } from "../context/Auth";

const SignIn = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const email = fd.get("email");
    const password = fd.get("password");

    auth
      .signIn(email, password)
      .then(result => {
        if (!result.ok) {
          setError(result.message);
        }
      });
  };
  
  return (
    <>
      <div className={styles.authMessage}>
        <h1>Sign in to Chat App</h1>
        <p>Welcome back. Good to see you again.</p>
      </div>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <div className={styles.inputLabelPair}>
          <label htmlFor="last">Email</label>
          <Input0 type="email" placeholder="myemail@some-domain.com" id="email" name="email" />
        </div>
        
        <div className={styles.inputLabelPair}>
          <label htmlFor="password">Password</label>
          <Input0
            type={!showPassword ? "password" : "text"}
            placeholder="Your password"
            id="password"
            name="password"
          />
        </div>
        
        <div className={styles.showPassword}>
          <CoolCheckbox onChange={() => setShowPassword(!showPassword)} />
          <label htmlFor="show-password">Show Password</label>
        </div>

        <div className={`${styles.errorMsg} ${error ? styles.visible : ""}`}>{error}</div>
        <Button0>Submit</Button0>
      </form>
    </>
  );
};

export default SignIn;
