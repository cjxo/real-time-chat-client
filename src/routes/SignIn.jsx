import { useState } from "react";
import CoolCheckbox from "../components/CoolCheckbox";
import routeStyles from "../styles/route.module.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <section className={routeStyles.authSection}>
      <form onSubmit={handleSubmit}>
        <div className={routeStyles.inputLabelPair}>
          <label for="first-name">First Name</label>
          <input type="text" placeholder="Ada" id="first-name" name="first_name" />
        </div>
        
        <div className={routeStyles.inputLabelPair}>
          <label for="last-name">Last Name</label>
          <input type="text" placeholder="Lovelace" id="last-name" name="last_name" />
        </div>
        
        <div className={routeStyles.inputLabelPair}>
          <label for="last">Email</label>
          <input type="email" placeholder="myemail@some-domain.com" id="email" name="email" />
        </div>
        
        <div className={routeStyles.inputLabelPair}>
          <label for="password">Password</label>
          <input
            type={!showPassword ? "password" : "text"}
            placeholder="Your password"
            id="password"
            name="password"
          />
        </div>
        
        <div className={routeStyles.inputLabelPair}>
          <label for="confirm-password">Confirm Password</label>
          <input
            type={!showPassword ? "password" : "text"}
            placeholder="Confirm password"
            id="confirm-password"
            name="confirm_password"
          />
        </div>
        
        <div className={routeStyles.showPassword}>
          <CoolCheckbox onChange={() => setShowPassword(!showPassword)} />
          <label for="show-password">Show Password</label>
        </div>
        
        <button className={routeStyles.submit}>Submit</button>
      </form>
    </section>
  );
};

export default SignIn;