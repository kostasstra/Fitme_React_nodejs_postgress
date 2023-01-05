// Imports
import React, {useState} from "react";

function RegisterModal()  {
    // State related variables
  const [registerError, setRegisterError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values,setValues ] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const register_api = "/api/auth/register";

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

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstname: event.target.value,
    }));
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastname: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.email && values.password && values.firstname && values.lastname) {
      fetch(register_api, {
        method: "POST",
        body: JSON.stringify({
          email:values.email,
          password:values.password,
          first_name:values.firstname,
          last_name:values.lastname
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => response.json()).then(function (result) {
        if ( result.error ) {
          console.log(result.error);
          setRegisterError(true);
        } else {
          window.$("#signUpModal").modal("hide");
          setValues({email: "", password: "", firstname: "", lastname: ""});
        }
      })
    }
    setSubmitted(true);
  }

  return (
    <div className="modal fade modal-container signup-form" id="signUpModal" tabIndex={-1} role="dialog" aria-labelledby="signUpModalTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header align-items-center mh-bg-2">
            <h5 className="modal-title" id="signUpModalTitle">Eγγραφή</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" className="la la-times-circle" />
            </button>
          </div>
          <div className="modal-body">
            <form method="post" className="form-box" id="register-form" onSubmit={handleSubmit}>
              <div className="input-box">
                <label className="label-text">Email</label>
                <div className="form-group">
                  <span className="la la-envelope form-icon" />
                  <input className="form-control form-control-styled" type="email" name="email" placeholder="Διεύθυνση Email" value={values.email} onChange={handleEmailInputChange}/>
                  {/* TODO: Stratigos -> Add CSS to the below span */}
                  {submitted &&!values.email && <span id="email-error">Παρακαλούμε εισάγετε τo e-mail σας.</span>}
                </div>
              </div>
              <div className="input-box">
                <label className="label-text">Όνομα</label>
                <div className="form-group">
                  <span className="la la-envelope form-icon" />
                  <input className="form-control form-control-styled" type="first_name" name="first_name" placeholder="Όνομα" value={values.firstname} onChange={handleFirstNameInputChange}/>
                  {/* TODO: Stratigos -> Add CSS to the below span */}
                  {submitted &&!values.firstname && <span id="email-error">Παρακαλούμε εισάγετε τo όνομά σας.</span>}
                </div>
              </div>
              <div className="input-box">
                <label className="label-text">Επώνυμο</label>
                <div className="form-group">
                  <span className="la la-envelope form-icon" />
                  <input className="form-control form-control-styled" type="last_name" name="last_name" placeholder="Επώνυμο" value={values.lastname} onChange={handleLastNameInputChange}/>
                  {/* TODO: Stratigos -> Add CSS to the below span */}
                  {submitted &&!values.lastname && <span id="email-error">Παρακαλούμε εισάγετε τo επώνυμό σας.</span>}
                </div>
              </div>
              <div className="input-box">
                <label className="label-text">Κωδικός</label>
                <div className="form-group">
                  <span className="la la-lock form-icon" />
                  <input className="form-control form-control-styled" type="text" name="password" placeholder="Γράψε Κωδικό" value={values.password} onChange={handlePasswordInputChange}/>
                  {/* TODO: Stratigos -> Add CSS to the below span */}
                  {submitted &&!values.password && <span id="email-error">Παρακαλούμε εισάγετε τoν κωδικό σας.</span>}
                </div>
                <p className="font-size-14 mt-n2">O Κωδικός σου θα πρέπει να ειναι τουλάχιστον 6 χαρακτήρες και θα πρέπει να περιέχει γράμματα και αριθμούς </p>
              </div>
              <div className="input-box py-4 user-action-meta">
                <div className="custom-checkbox">
                  <input type="checkbox" id="agreeChb" />
                  <label htmlFor="agreeChb" className="font-size-14">By signing up, you agree to our <a href="privacy-policy.html" className="text-color-2">Privacy Policy.</a></label>
                </div>
              </div>
              <div className="btn-box">
                <button type="submit" className="theme-btn gradient-btn w-100 ">
                  <i className="la la-user-plus mr-1" /> Κάνε εγγραφή
                </button>
                <p className="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                  Έχεις κάνει εγγραφή; <a className="text-color-2 login-btn" href="\#">Log in</a>
                </p>
              </div>
              <div className="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto">
                OR
              </div>
              <div className="text-center">
                <p className="font-size-15 font-weight-medium">Σύνδεση με social network</p>
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
                <p className="font-size-15 pb-3">Don't worry, we never any post to your social profile.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
