import { useState } from "react";
import { Button } from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./SignUp.module.scss";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const goTo = (path: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(path);
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.wrapper}>
        <div className={styles.closeBtn}>
          <button onClick={goTo("/")}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className={styles.content}>
          <span className={styles.headerTitle}>Sign Up</span>
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
            <label htmlFor="">Full name</label>
            <Input type="text" />
            <label htmlFor="">Email</label>
            <Input type="email" />
            <div className={styles.passwordInput}>
              <label htmlFor="">Password</label>
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
            <div className={styles.newsCheck}>
              <Input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                Sign up for news about our sales and new arrivals
              </label>
            </div>
            <Button text="Sign up" type="submit" />
          </form>
          <div className={styles.askForLogin}>
            Already have an account?
            <Link to="/login">Log in</Link>
          </div>
          <div className={styles.note}>
            By signing up, you agree to out{" "}
            <a href="https://dvhuzg.vercel.app">Privacy Policy</a> and{" "}
            <a href="https://dvhuzg.vercel.app">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
