import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function NotFound() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h1 className="text-danger">URL not found</h1>
      </AppTemplate>
   );
}
