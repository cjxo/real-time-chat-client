import { useState } from "react";
import CoolCheckbox from "../components/CoolCheckbox";
import routeStyles from "../styles/route.module.css";
import { Button0 } from "../components/Button";
import { Input0 } from "../components/Input";
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
    <form onSubmit={handleSubmit}>
      <div className={routeStyles.inputLabelPair}>
        <label htmlFor="last">Email</label>
        <Input0 type="email" placeholder="myemail@some-domain.com" id="email" name="email" />
      </div>
      
      <div className={routeStyles.inputLabelPair}>
        <label htmlFor="password">Password</label>
        <Input0
          type={!showPassword ? "password" : "text"}
          placeholder="Your password"
          id="password"
          name="password"
        />
      </div>
      
      <div className={routeStyles.showPassword}>
        <CoolCheckbox onChange={() => setShowPassword(!showPassword)} />
        <label htmlFor="show-password">Show Password</label>
      </div>

      <div className={`${routeStyles.errorMsg} ${error ? routeStyles.visible : ""}`}>{error}</div>
      <Button0>Submit</Button0>
    </form>
  );
};

export default SignIn;
