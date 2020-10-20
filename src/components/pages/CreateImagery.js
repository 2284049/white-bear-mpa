import React from "react";
import saveIcon from "../../icons/save.svg";
import appLogo from "../../icons/logo-app.svg";

export default function CreateImagery() {
   return (
      <div>
         <div
            className="bg-danger w-100 lead justify-content-center d-none fixed-top"
            id="overlay-error"
         >
            <img src={saveIcon} width="32px" alt="" />
            <p className="d-inline py-4 ml-2">
               Oops! Our bad. Please try again.
            </p>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                  <img src={appLogo} width="32px" alt="White Bear Logo" />
                  <h3 className="d-inline text-brand text-dark ml-1">
                     White Bear
                  </h3>
                  <a
                     href="index.html"
                     className="btn btn-link float-right mt-n1"
                  >
                     Log out
                  </a>
                  <div className="clearfix"></div>
                  <div
                     className="btn-group d-flex mt-1"
                     role="navigation"
                     aria-label="navigation"
                  >
                     <a
                        href="create-answer.html"
                        className="btn btn-secondary tab-active"
                     >
                        Create new
                     </a>
                     <a
                        href="review-imagery.html"
                        className="btn btn-secondary tab-separator"
                     >
                        Review
                     </a>
                     <a
                        href="/all-cards.html"
                        className="btn btn-secondary tab-separator"
                     >
                        All cards
                     </a>
                  </div>

                  <p className="text-center lead text-muted my-2">
                     Add memorable imagery
                  </p>

                  <div className="card">
                     <div className="card-body bg-primary lead">
                        {/* <!-- We put in two different text areas 
                     for the mockup depending on screen size, 
                     so that 300 characters would show without 
                     having scroll bars. d-md-none and d-md-block-->
              <!-- Autofocus is an attribute so the cursor is
                 automatically blinking when the page loads. --> */}
                        {/* <!-- Commenting the first textarea out, to focus on character counts */}
                        <textarea
                           rows="11"
                           className="d-md-none"
                           autoFocus={true}
                        ></textarea>

                        <textarea
                           rows="6"
                           id="create-imagery-input"
                           autoFocus={true}
                        ></textarea>
                     </div>
                  </div>
                  <div className="card">
                     <div className="card-body bg-secondary lead">
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                        horrible vermin. He lay on his armour-like back, and if
                        he lifted his head a little he could se
                     </div>
                  </div>

                  <p
                     className="float-right mt-2 mb-5 text-muted"
                     id="imagery-characters"
                  >
                     <span id="imagery-char-count">0</span>/240
                  </p>

                  <div className="clearfix"></div>

                  <button className="btn btn-link mt-1" id="back-to-answer">
                     Back to answer
                  </button>
                  <button
                     className="btn btn-primary btn-lg ml-4 float-right"
                     id="save-card"
                     disabled="disabled"
                  >
                     <img
                        src="/icons/save.svg"
                        width="20px"
                        alt=""
                        style={{
                           marginBottom: "3px",
                           marginRight: "5px",
                           marginLeft: "-1px",
                        }}
                     />
                     Save
                  </button>
               </div>
            </div>
         </div>{" "}
      </div>
   );
}
