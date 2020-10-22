import React from "react";
import { Link } from "react-router-dom";
import editIcon from "../../icons/edit.svg";

export default function MemoryCard(props) {
   return (
      <div className="d-flex align-items-start mb-5">
         <div className="app-card flex-fill">
            <div className="card">
               <div className="card-body bg-primary">{props.pizza}</div>
            </div>
            <div className="card">
               <div className="card-body bg-secondary">{props.bananas}</div>
            </div>
         </div>
         <Link to="/edit" className="btn btn-link ml-4 d-flex mt-n2">
            <img
               src={editIcon}
               className="mr-2"
               style={{ marginTop: "2px", marginRight: "8px" }}
               width="20px"
               alt=""
            />
            Edit
         </Link>
      </div>
   );
}
