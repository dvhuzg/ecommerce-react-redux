import { useState } from "react";
import { Button } from "../../subComponent/Button/Button";
import Input from "../../subComponent/Input/Input";
import styles from "./Login.module.scss";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.wrapper}>
        <div className={styles.closeBtn}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className={styles.content}>
          <span className={styles.headerTitle}>Log in</span>
          <Button
            text="Sign up with Google"
            onClick={() => alert("Google")}
            icon="fa-brands fa-google"
          />
          <Button
            text="Sign up with Facebook"
            onClick={() => alert("Facebook")}
            icon="fa-brands fa-facebook-f"
          />
          <div className={styles.orLine}>
            <span className={styles.line}></span>
            <span className={styles.text}>OR</span>
            <span className={styles.line}></span>
          </div>
          <form action="" className={styles.signUpForm}>
            <label htmlFor="">Email</label>
            <Input type="email" />
            <div className={styles.passwordInput}>
              <div className={styles.pwTitle}>
                <label htmlFor="">Password</label>
                <span>Forgot password?</span>
              </div>
              <Input type={showPassword ? "text" : "password"} />
              {showPassword ? (
                <i className="fa-solid fa-eye" onClick={handleShowPassword} />
              ) : (
                <i
                  className="fa-solid fa-eye-slash"
                  onClick={handleShowPassword}
                />
              )}
            </div>

            <Button text="Log in" type="submit" />
          </form>
          <div className={styles.askForLogin}>
            Don't have an account?
            <a href="https://dvhuzg.vercel.app">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
