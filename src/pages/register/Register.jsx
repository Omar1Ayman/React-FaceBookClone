import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="registerContainer">
          <div className="registerLeft">
            <h3 className="registerLogo">FaceBookClone</h3>
            <span className="registerDesc">
              connect with friends and the world around you on FaceBookClone
            </span>
          </div>
          <div className="registerRight">
            <div className="registerBox">
              <input
                type="text"
                placeholder="Username"
                className="registerInput"
              />
              <input
                type="email"
                placeholder="Email"
                className="registerInput"
              />
              <input
                type="password"
                placeholder="Password"
                className="registerInput"
              />
              <input
                type="password"
                placeholder="Coonfirm Password"
                className="registerInput"
              />

              <button className="registerButton">Sign Up</button>
              <hr />
              <button className="RegisterButton">
                <Link to="/login">Log into Account</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
