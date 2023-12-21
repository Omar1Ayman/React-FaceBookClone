import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="loginContainer">
          <div className="lgoinLeft">
            <h3 className="loginLogo">FaceBookClone</h3>
            <span className="loginDesc">
              connect with friends and the world around you on FaceBookClone
            </span>
          </div>
          <div className="lgoinRight">
            <div className="loginBox">
              <input type="email" placeholder="Email" className="loginInput" />
              <input
                type="password"
                placeholder="Password"
                className="loginInput"
              />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">
                <Link to="/identify">Forgot Password?</Link>
              </span>
              <hr />
              <button className="loginRegisterButton">
                <Link to="/register">Create a New Account</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
