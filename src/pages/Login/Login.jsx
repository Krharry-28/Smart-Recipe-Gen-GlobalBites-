import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPass, setUserPass] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [buttonText, setButtonText] = useState("Enter the GlobalBites Kitchen!");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userId === "user" && userPass === "user123") {
      navigate("/ExploreRecipe");
    } else {
      setButtonText("Incorrect password! Try again.");
      setButtonColor("button-error");
    }
  };

  return (
    <div className="login-main">
      <div className="main">
        <div className="inner-width">
          <h2 className="login-main_h2">
            Welcome back to GlobalBites! <br /> Let’s cook something amazing.
          </h2>

          <div className="login-card">
            <h1>Login</h1>

            <div className="login-card-inner">
              <div className="input">
                <input
                  className="input-box"
                  type="email"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Email : user"
                />
                <FontAwesomeIcon className="input-icon" icon={faEnvelope} />
              </div>

              <div className="input">
                <input
                  className="input-box"
                  type="password"
                  value={userPass}
                  onChange={(e) => setUserPass(e.target.value)}
                  placeholder="Password : user123"
                />
                <FontAwesomeIcon className="input-icon" icon={faLock} />
                <FontAwesomeIcon className="input-icon_eye" icon={faEye} />
              </div>

              <div className="login-form__options">
                <label>
                  <input type="checkbox" className="login-form__remember-me" />
                  Remember me
                </label>
                <a href="#" className="login-form__forgot-password link">
                  Forgot Password?
                </a>
              </div>

              <button
                onClick={handleLogin}
                type="submit"
                className={`login-form__button button ${buttonColor}`}
              >
                {buttonText}
              </button>

              {/* <div className="login-social">
                <p>Or Login with</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;