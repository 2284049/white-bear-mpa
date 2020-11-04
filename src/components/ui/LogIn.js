import React from "react";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";
import { withRouter } from "react-router-dom";
import { EMAIL_REGEX } from "../../utils/helpers";
import axios from "axios";

class LogIn extends React.Component {
   // this function turned into a class will have a bunch of functions in it
   constructor(props) {
      super(props);
      this.state = {
         emailError: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }

   componentDidMount() {
      axios
         .get("https://run.mocky.io/v3/cd3b2851-1a2d-46f4-a491-3ce34f57d4f7")
         .then((res) => {
            // handle success
            const currentUser = res.data;
            console.log(currentUser);
         })
         .catch((error) => {
            // handle error
         });
   }

   async setEmailState(emailInput) {
      const lowerCasedEmail = emailInput.toLowerCase(); // make their input lowercase
      if (emailInput === "")
         // if the email input is blank,
         this.setState({
            emailError: "Please enter your email address.", // display this error
            hasEmailError: true, // make the input box red with is-invalid class
         });
      else if (!EMAIL_REGEX.test(lowerCasedEmail)) {
         // if email does not follow regex format,
         this.setState({
            emailError: "Please enter a valid email address.", //display this error
            hasEmailError: true, // make the input box red with is-invalid class
         });
      } else {
         // otherwise, we don't want an email error (empty string) and we want to set hasEmailError to false to remove is-invalid class
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   async setPasswordState(passwordInput) {
      if (passwordInput === "") {
         this.setState({
            passwordError: "Please enter your password.", // display this error
            hasPasswordError: true, // make the input box red with is-invalid class
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndLogInUser() {
      const emailInput = document.getElementById("login-email-input").value; // get the user email input
      await this.setEmailState(emailInput);
      const passwordInput = document.getElementById("login-password-input")
         .value;
      await this.setPasswordState(passwordInput, emailInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         const user = {
            id: getUuid(),
            email: emailInput,
            password: hash(passwordInput),
            loggedInAt: Date.now(),
         };
         console.log(user);
         // TO TAKE THE VALIDATED USER TO NEXT PAGE
         // First, put up top: import { withRouter } from "react-router-dom";
         // take out the export defult at top and put on bottom of page like this: export default withRouter(LogIn);
         // use this code to tell it which page to go to:
         this.props.history.push("/create-answer");
      }
   }

   render() {
      return (
         <>
            <div className="col-12 col-lg-5">
               <div className="card mt-8 mt-lg-0 ml-lg-8">
                  <div className="card-body text-dark">
                     <h2>Welcome back</h2>
                     <p className="font-sans-serif mt-3 mb-5">
                        Log in with your email address and password.
                     </p>
                     <div className="form-group">
                        <label
                           htmlFor="login-email-input"
                           className="text-muted lead font-sans-serif"
                        >
                           Email address
                        </label>
                        <input
                           type="email"
                           className={classnames({
                              "form-control": true,
                              "is-invalid": this.state.emailError, // is-invalid class will display when emailError state equals true
                           })}
                           id="login-email-input"
                        />
                        {this.state.hasEmailError && (
                           // when the hasEmailError state is true
                           // which means there is an error, display this:
                           <p className="text-danger" id="login-email-error">
                              {this.state.emailError}
                           </p>
                        )}
                     </div>
                     <div className="form-group">
                        <label
                           htmlFor="login-password-input"
                           className="text-muted lead font-sans-serif"
                        >
                           Password
                        </label>
                        <input
                           type="email"
                           className={classnames({
                              "form-control": true,
                              "is-invalid": this.state.passwordError, // is-invalid class will display when emailError state equals true
                           })}
                           id="login-password-input"
                        />
                        {this.state.hasPasswordError && (
                           <p className="text-danger" id="login-password-error">
                              {this.state.passwordError}
                           </p>
                        )}
                     </div>
                     <button
                        type="password"
                        className="float-right btn btn-success btn-lg font-sans-serif"
                        onClick={() => {
                           this.validateAndLogInUser();
                        }}
                     >
                        Log in
                     </button>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default withRouter(LogIn);
