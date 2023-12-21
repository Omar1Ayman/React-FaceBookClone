import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <form action="" className="login">
          <h1 className="form-title">Login</h1>
          <div className="col">
            <div className="form-control">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="email" />
            </div>
          </div>
          <div className="col">
            <div className="form-control">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="password
              "
              />
            </div>
          </div>
          <div className="col">
            <button className="login-btn">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
