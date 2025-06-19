import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState({});
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let isValid = true;
    let newError = {};
    if (formData.username.length === 0) {
      isValid = false;
      newError.username = "Username is required";
    }
    if (formData.password.length === 0) {
      isValid = false;
      newError.password = "Password is required";
    }
    setError(newError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validate()) {
      if (formData.username === 'admin') {
        setMessage("Valid Details");
      } else {
        setMessage("Invalid");
      }
    }
  };

  return (
    <section className="ezy__signin1 light d-flex align-items-center">
      <div className="container">
        <div className="row py-4 justify-content-center">
          <div className="col-lg-5">
            <div className="card ezy__signin1-form-card">
              <div className="card-body p-md-5">
                <h2 className="ezy__signin1-heading mb-4 mb-md-5">Log In</h2>

                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-4 mt-2">
                    <label htmlFor="username" className="mb-2">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    {error.username && <div className="text-danger">{error.username}</div>}
                  </div>
                  <div className="form-group mb-2 mt-2">
                    <label htmlFor="password" className="mb-2">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {error.password && <div className="text-danger">{error.password}</div>}
                  </div>
                  <div className="form-group mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="remember-me" />
                      <label className="form-check-label" htmlFor="remember-me"> Remember me </label>
                    </div>
                  </div>
                  <button type="submit" className="btn ezy__signin1-btn-submit w-100">Log In</button>
                  <button className="btn w-100">Forget your password?</button>

                  <div className="position-relative ezy__signin1-or-separator">
                    <hr className="my-4 my-md-5" />
                    <span className="px-2">Or</span>
                  </div>

                  <button className="btn btn-primary ezy__signin1-btn w-100 d-flex align-items-center mb-3">
                    <span className="fab fa-facebook text-white fs-4"></span>
                    <span className="w-100 text-center text-white">Continue with Facebook</span>
                  </button>
                  <button className="btn btn-danger ezy__signin1-btn w-100 d-flex align-items-center">
                    <span className="fab fa-google text-white fs-4"></span>
                    <span className="w-100 text-center text-white">Continue with Google</span>
                  </button>

                  <div className="text-center mt-4 mt-md-5">
                    <p className="mb-0 opacity-50 lh-1">Don't have an account?</p>
                    <a href="#" className="btn btn-link py-0 text-dark text-decoration-none">Create account</a>
                  </div>
                </form>
                {message && <div className="text-success mt-3">{message}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
