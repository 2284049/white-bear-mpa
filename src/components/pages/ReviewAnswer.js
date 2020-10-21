import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />

         <div className="card">
            <div className="card-body bg-primary lead">
               One morning, when Gregor Samsa woke from troubled dreams, he
               found himself transformed in his bed into a horrible vermin. He
               lay on his armour-like back, and if he lifted his head a little
               he could se
            </div>
         </div>
         <div className="card mb-5">
            <div className="card-body bg-secondary lead">
               The European languages are members of the same family. Their
               separate existence is a myth. For science, music, sport, etc,
               Europe uses the same vocabulary. The languages only differ in
               their grammar,.
            </div>
         </div>

         <Link to="/edit" className="btn btn-link mt-2">
            Edit
         </Link>
         <div className="float-right">
            <Link to="/review-empty" className="btn btn-outline-primary">
               Needs work
            </Link>
            <Link to="/review-empty" className="btn btn-primary ml-4">
               <img
                  src={thumbsUpIcon}
                  width="20px"
                  style={{ marginBottom: "5px", marginRight: "3px" }}
                  alt=""
               />
               Got it
            </Link>
         </div>
      </AppTemplate>
   );
}
