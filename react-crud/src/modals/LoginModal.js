// Imports
import React, {useState} from "react";

function LoginModal(props)  {
  // State related variables
  const [loginError, setLoginError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const login_api = "/api/auth/login";

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handlePasswordInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.email && values.password) {
      fetch(login_api, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
          email:values.email,
          password:values.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => response.json()).then(function (result) {
      if (result) {
        if (loginError) { setLoginError(false) };
        props.setAccessToken(result.accessToken);
        props.setIsLoggedIn(true);
        window.localStorage.setItem("isLoggedIn", "true");
        window.$("#loginModal").modal("hide");
      } else {
        setLoginError(true);
      }
      setValues({email: "", password: ""});
      })
    }
    setSubmitted(true);   
  }

  return (
    <div className="modal fade modal-container login-form" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="loginModalTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header align-items-center mh-bg">
            <h5 className="modal-title" id="loginModalTitle">Για κάνε κάνα Login</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" className="la la-times-circle" />
            </button>
          </div>
          <div className="modal-body">
            <form className="form-box" id="login-form" onSubmit={handleSubmit}>
              <div className="input-box">
                {/* TODO: Stratigos -> Add CSS to the below span */}
                {submitted && loginError && <span id="login-error">Ο χρήστης ή ο κωδικός είναι</span>}
                <label className="label-text">Email</label>
                <div className="form-group">
                  <span className="la la-user form-icon" />
                  <input className="form-control form-control-styled" type="text" name="email" placeholder="Email address" value={values.email} onChange={handleEmailInputChange}/>
                  {/* TODO: Stratigos -> Add CSS to the below span */}
                  {submitted &&!values.email && <span id="email-error">Παρακαλούμε εισάγετε τo e-mail σας.</span>}
                </div>
              </div>
              <div className="input-box">
                <label className="label-text">Password</label>
                <div className="form-group">
                  <span className="la la-lock form-icon" />
                  <input className="form-control form-control-styled" type="text" name="password" placeholder="Enter password" value={values.password} onChange={handlePasswordInputChange}/>
                  {/* TODO: Stratigos -> Add CSS to the below span */}
                  {submitted &&!values.password && <span id="password-error">Παρακαλούμε εισάγετε τον κωδικό σας.</span>}
                </div>
              </div>
              <div className="input-box d-flex align-items-center justify-content-between pb-4 user-action-meta">
                <div className="custom-checkbox">
                  <input type="checkbox" id="keepMeSignedChb" />
                  <label htmlFor="keepMeSignedChb" className="font-size-14">Keep me signed in</label>
                </div>
                <a href="\#" className="margin-bottom-10px lost-pass-btn font-size-14">Lost Password?</a>
              </div>
              <div className="btn-box">
                <button type="submit" className="theme-btn gradient-btn w-100">
                  <i className="la la-sign-in mr-1" /> Login to Account
                </button>
                <p className="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                  New to Listhub? <a className="text-color-2 signup-btn" href="\#">Create account</a>
                </p>
              </div>
              <div className="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto">
                OR
              </div>
              <div className="text-center">
                <p className="font-size-15 font-weight-medium">Login with your social network</p>
                <ul className="social-profile social-profile-colored py-3">
                  <li>
                    <a href="/#" className="google-bg mx-1" data-toggle="tooltip" data-placement="top" title="Google">
                      <i className="lab la-google" />
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="facebook-bg mx-1" data-toggle="tooltip" data-placement="top" title="Facebook">
                      <i className="lab la-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="twitter-bg mx-1" data-toggle="tooltip" data-placement="top" title="Twitter">
                      <i className="lab la-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="instagram-bg mx-1" data-toggle="tooltip" data-placement="top" title="Instagram">
                      <i className="lab la-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
