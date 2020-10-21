import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import saveIcon from "../../icons/save.svg";

export default function Edit() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />

         <p className="text-center lead text-muted my-2">Edit card</p>

         <div className="card">
            <div className="card-body bg-primary lead">
               <textarea
                  rows="6"
                  id="edit-imagery-input"
                  autoFocus={true}
               ></textarea>
            </div>
         </div>
         <div className="card">
            <div className="card-body bg-secondary lead">
               <textarea rows="6" id="edit-answer-input"></textarea>
            </div>
         </div>

         <p className="float-right mt-2 mb-5 text-muted">
            <span id="edit-imagery-characters">
               Top:
               <span id="edit-imagery-char-count">0</span>/240
            </span>
            &nbsp;&nbsp;
            <span id="edit-answer-characters">
               Bottom:
               <span id="edit-answer-char-count">0</span>/240
            </span>
         </p>
         <div className="clearfix"></div>

         <Link to="/all-cards" className="btn btn-link mt-1">
            Discard changes
         </Link>
         <Link
            to="/all-cards"
            className="btn btn-primary btn-lg ml-4 float-right"
            id="edit-save"
            disabled
         >
            <img
               src={saveIcon}
               width="20px"
               alt=""
               style={{
                  marginBottom: "3px",
                  marginRight: "5px",
                  marginLeft: "-1px",
               }}
            />
            Save
         </Link>

         <p className="text-center lead text-muted my-5">Card properties</p>

         <div className="row">
            <div className="col-4">
               <p className="text-muted mt-1">Created on:</p>
               <p className="text-muted mt-1">Last attempt:</p>
               <p className="text-muted mt-1">Next attempt:</p>
               <p className="text-muted mt-1">Consecutives:</p>
            </div>
            <div className="col-8">
               <p className="mt-1">Dec. 24, 2019</p>
               <p className="mt-1">Dec. 31, 2019</p>
               <p className="mt-1">Jul. 14, 2020</p>
               <p className="mt-1">4</p>
            </div>
         </div>

         <div className="custom-control custom-checkbox mt-5 mb-3">
            <input
               type="checkbox"
               className="custom-control-input"
               id="show-delete"
            />
            <label
               className="custom-control-label text-muted"
               htmlFor="show-delete"
            >
               Show delete button
            </label>
         </div>

         <button
            type="button"
            className="btn btn-outline-danger d-none"
            id="delete-button"
         >
            Delete this card
         </button>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
      </AppTemplate>
   );
}
