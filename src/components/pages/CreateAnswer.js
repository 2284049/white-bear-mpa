import React from "react";

import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <p className="text-center lead text-muted my-2">Add an answer</p>

         <div className="card">
            <div className="card-body bg-secondary lead">
               {/* <!-- We put in two different text areas 
                            for the mockup depending on screen size, 
                            so that 300 characters would show without 
                            having scroll bars. d-md-none and d-md-block-->
                     <!-- Autofocus is an attribute so the cursor is
                        automatically blinking when the page loads. -->
                     <!-- Commenting the first textarea out, to focus on character counts */}
               <textarea
                  rows="11"
                  className="d-md-none"
                  autoFocus={true}
               ></textarea>

               <textarea
                  rows="6"
                  id="create-answer-input"
                  autoFocus={true}
               ></textarea>
            </div>
         </div>

         <p id="answer-characters" className="float-right mt-2 mb-5 text-muted">
            <span id="answer-char-count">0</span>/240
         </p>

         <div className="clearfix"></div>

         <div className="float-right">
            <Link
               to="/create-imagery"
               id="next"
               disabled="disabled"
               className="btn btn-outline-primary"
            >
               Next
            </Link>
         </div>
      </AppTemplate>
   );
}
