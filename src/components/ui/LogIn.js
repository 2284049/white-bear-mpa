import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
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
      </>
   );
}
