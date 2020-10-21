import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />

         <p className="text-center lead text-muted my-2">Out of cards</p>

         <Link to="/review-answer" className="btn btn-link mt-1">
            Previous card
         </Link>
         <Link
            to="/review-imagery"
            className="btn btn-outline-primary float-right"
         >
            Get more cards
         </Link>
      </AppTemplate>
   );
}