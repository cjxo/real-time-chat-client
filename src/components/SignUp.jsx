import { useState } from "react";
import CoolCheckbox from "../components/CoolCheckbox";
import styles from "../styles/component.module.css";
import { Button0 } from "../components/Button";
import { Input0 } from "../components/Input";
import { useAuth } from "../context/Auth";

const SignUp = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const first_name = fd.get("first_name");
    const last_name = fd.get("last_name");
    const email = fd.get("email");
    const password = fd.get("password");
    const confirm_password = fd.get("confirm_password");

    if (password !== confirm_password) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password length must be at least 8");
      return;
    }
    
    auth
      .signUp(first_name, last_name, email, password)
      .then(result => {
        if (!result.ok) {
          setError(result.message);
        }
      });
  };
  
  return (
    <form className={styles.authForm} onSubmit={handleSubmit}>
      <div className={styles.inputLabelPair}>
        <label htmlFor="first-name">First Name</label>
        <Input0 type="text" placeholder="Ada" id="first-name" name="first_name" />
      </div>
      
      <div className={styles.inputLabelPair}>
        <label htmlFor="last-name">Last Name</label>
        <Input0 type="text" placeholder="Lovelace" id="last-name" name="last_name" />
      </div>
      
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
      
      <div className={styles.inputLabelPair}>
        <label htmlFor="confirm-password">Confirm Password</label>
        <Input0
          type={!showPassword ? "password" : "text"}
          placeholder="Confirm password"
          id="confirm-password"
          name="confirm_password"
        />
      </div>
      
      <div className={styles.showPassword}>
        <CoolCheckbox onChange={() => setShowPassword(!showPassword)} />
        <label htmlFor="show-password">Show Password</label>
      </div>

      <div className={`${styles.errorMsg} ${error ? styles.visible : ""}`}>{error}</div>
      <Button0>Submit</Button0>
    </form>
  );
};

export default SignUp;
