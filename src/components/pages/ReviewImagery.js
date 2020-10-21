import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />

         <div className="card mb-5">
            <div className="card-body bg-primary lead">
               One morning, when Gregor Samsa woke from troubled dreams, he
               found himself transformed in his bed into a horrible vermin. He
               lay on his armour-like back, and if he lifted his head a little
               he could se
            </div>
         </div>

         <button className="btn btn-link mt-1">Previous card</button>
         <Link
            to="/review-answer"
            className="btn btn-outline-primary float-right"
         >
            Show answer
         </Link>
      </AppTemplate>
   );
}