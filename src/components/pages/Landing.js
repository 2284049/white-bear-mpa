import React from "react";
import { Link } from "react-router-dom";
import landingLogo from "../../img/logo-landing.png";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container">
            <div className="row mb-8">
               <div className="col-5 col-sm-4 col-xl-2 mt-6">
                  <img
                     src={landingLogo}
                     className="float-right"
                     alt="White Bear Logo"
                  />
               </div>
               <div className="col-7 col-sm-8 col-xl-10 mt-6">
                  <h1 className="d-inline text-brand text-light">White Bear</h1>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-12 col-lg-5">
                  <div className="card">
                     <div className="card-body text-dark">
                        <h2>Nice to meet you</h2>
                        <p className="font-sans-serif mt-3">
                           Sign up for White Bear. Free Forever.
                        </p>
                        <div id="intro-card">
                           <Link
                              to="/create-answer"
                              className="btn btn-success btn-lg font-sans-serif mt-5"
                              style={{ width: "100%" }}
                              id="sign-up-button"
                           >
                              Sign up
                           </Link>
                        </div>
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
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-5">
                  <div className="card mt-8 mt-lg-0 ml-lg-8">
                     <div className="card-body text-dark">
                        <h2>Welcome back</h2>
                        <p className="font-sans-serif mt-3 mb-5">
                           Log in with your email address and password.
                        </p>
                        <div className="form-group">
                           <label
                              htmlFor="email-input"
                              className="text-muted lead font-sans-serif"
                           >
                              Email address
                           </label>
                           <input
                              type="email"
                              className="form-control"
                              id="email-input"
                           />
                        </div>
                        <div className="form-group">
                           <label
                              htmlFor="password-input"
                              className="text-muted lead font-sans-serif"
                           >
                              Password
                           </label>
                           <input
                              type="email"
                              className="form-control"
                              id="password-input"
                           />
                        </div>
                        <Link
                           to="/create-answer"
                           className="float-right btn btn-success btn-lg font-sans-serif"
                        >
                           Log in
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
