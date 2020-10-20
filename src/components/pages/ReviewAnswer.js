import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import Header from "../ui/Header";

export default function ReviewAnswer() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
               <Header />
               <div
                  className="btn-group d-flex mt-1 mb-5"
                  role="navigation"
                  aria-label="navigation"
               >
                  <a href="create-answer.html" className="btn btn-secondary">
                     Create new
                  </a>
                  <a
                     href="review-imagery.html"
                     className="btn btn-secondary tab-separator tab-active"
                  >
                     Review
                  </a>
                  <a
                     href="all-cards.html"
                     className="btn btn-secondary tab-separator"
                  >
                     All cards
                  </a>
               </div>

               <div className="card">
                  <div className="card-body bg-primary lead">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could se
                  </div>
               </div>
               <div className="card mb-5">
                  <div className="card-body bg-secondary lead">
                     The European languages are members of the same family.
                     Their separate existence is a myth. For science, music,
                     sport, etc, Europe uses the same vocabulary. The languages
                     only differ in their grammar,.
                  </div>
               </div>

               <a href="edit.html" className="btn btn-link mt-2">
                  Edit
               </a>
               <div className="float-right">
                  <a
                     href="review-empty.html"
                     className="btn btn-outline-primary"
                  >
                     Needs work
                  </a>
                  <a href="review-empty.html" className="btn btn-primary ml-4">
                     <img
                        src={thumbsUpIcon}
                        width="20px"
                        style={{ marginBottom: "5px", marginRight: "3px" }}
                        alt=""
                     />
                     Got it
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
