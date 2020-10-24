import React from "react";
import { Link } from "react-router-dom";

export default class SignUp extends React.Component {
   // this function turned into a class will have a bunch of functions in it
   constructor(props) {
      super(props);
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
      };
   }

   displaySignUpInputs() {
      this.setState({
         isDisplayingInputs: true,
      });
   }

   render() {
      // put the body of your function here
      return (
         <div className="col-12 col-lg-5">
            <div className="card">
               <div className="card-body text-dark">
                  <h2>Nice to meet you</h2>
                  <p className="font-sans-serif mt-3">
                     Sign up for White Bear. Free Forever.
                  </p>
                  {this.state.isDisplayingInputs && (
                     // we are saying we want the stuff below to display
                     // when this state is true
                     // it's initially set to false
                     <div id="create-account-card" className="">
                        <p className="text-blue font-sans-serif mt-2 mb-5">
                           Let's get you signed up.
                        </p>
                        <div className="form-group">
                           <label
                              htmlFor="email-sign-up-input"
                              className="text-muted lead font-sans-serif"
                           >
                              Email address
                           </label>
                           <input
                              type="email"
                              className="form-control"
                              id="email-sign-up-input"
                           />
                           <p
                              className="text-danger"
                              id="email-sign-up-error"
                           ></p>
                        </div>
                        <div className="form-group">
                           <label
                              htmlFor="password-sign-up-input"
                              className="text-muted lead font-sans-serif"
                           >
                              Create a password
                           </label>
                           <p className="text-muted mt-n2">
                              Must be at least 9 characters.
                           </p>
                           <input
                              type="password"
                              className="form-control"
                              id="password-sign-up-input"
                           />
                           <p
                              className="text-danger"
                              id="password-sign-up-error"
                           ></p>
                        </div>

                        <Link
                           to="/create-answer"
                           className="float-right btn btn-success btn-lg font-sans-serif"
                           style={{ width: "100%" }}
                           id="lets-go"
                        >
                           Let's go!
                        </Link>
                     </div>
                  )}

                  {!this.state.isDisplayingInputs && (
                     // now we are telling it what to do when
                     // the state of this object is set to false
                     // by putting an exclamation point in front of it
                     // we want the sign up button to show when the state is false
                     <button
                        className="btn btn-success btn-lg font-sans-serif mt-5"
                        style={{ width: "100%" }}
                        id="sign-up-button"
                        onClick={() => {
                           this.displaySignUpInputs();
                           // when the button is clicked
                           // and the state of isDislayingSignUpInputs changes to false
                           // the sign up button disappears and the sign up card displays
                        }}
                     >
                        Sign up
                     </button>
                  )}
               </div>
            </div>
         </div>
      );
   }
}
