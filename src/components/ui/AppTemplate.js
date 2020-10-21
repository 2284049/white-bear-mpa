import React from "react";

export default function AppTemplate(props) {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
               {props.children}
            </div>
         </div>
      </div>
   );
}
