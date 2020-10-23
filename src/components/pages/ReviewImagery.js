import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[2];

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div className="card mb-5">
            <div className="card-body bg-primary lead">
               {memoryCard.imagery}
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
