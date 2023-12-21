import { Link } from "react-router-dom";
import "./forgotpasswordpage.css";
import { Button } from "@mui/material";

const ForgotPasswordPage = () => {
  return (
    <>
      <div className="ForgotPasswordPage">
        <div className="ForgotPasswordPageContainer">
          <div className="ForgotPasswordPageRight">
            <div className="ForgotPasswordPageBox">
              <h2>Find Your Account</h2>
              <hr />
              <p>
                Please enter your email address or mobile number to search for
                your account
              </p>
              <input
                type="email"
                placeholder="Email address or mobie number"
                className="ForgotPasswordPageInput"
              />
              <hr />
              <div className="btn">
                <Button variant="contained" color="inherit">
                  <Link to="/">Cancel</Link>
                </Button>
                <Button variant="contained" color="primary">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
