import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import saveIcon from "../../icons/save.svg";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format"; // downloaded library date-fns
import classnames from "classnames";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers";

const memoryCard = memoryCards[2];

export default class Edit extends React.Component {
   constructor(props) {
      super(props);
      console.log("In the edit component.");
      this.state = {
         answerText: memoryCard.answer,
         imageryText: memoryCard.imagery,
         isDisplayingDeleteButton: false,
      };
   }

   setImageryText(e) {
      this.setState({ imageryText: e.target.value }); // set the state of imageryText to be whatever the user inputs in that field (e.target.value)
   }

   setAnswerText(e) {
      this.setState({ answerText: e.target.value }); // set the state of imageryText to be whatever the user inputs in that field (e.target.value)
   }

   displayDeleteButton() {
      this.setState({
         isDisplayingDeleteButton: !this.state.isDisplayingDeleteButton,
      });
   }

   checkHasInvalidCharCount() {
      if (
         this.state.answerText.length > MAX_CARD_CHARS ||
         this.state.answerText.length === 0 ||
         this.state.imageryText.length > MAX_CARD_CHARS ||
         this.state.imageryText.length === 0
      ) {
         return true;
      } else return false;
   }

   render() {
      return (
         <AppTemplate>
            <p className="text-center lead text-muted my-2">Edit card</p>

            <div className="card">
               <div className="card-body bg-primary lead">
                  <textarea
                     rows="4"
                     id="edit-imagery-input"
                     defaultValue={memoryCard.imagery}
                     onChange={(e) => this.setImageryText(e)} // whatever the user changes to the card, it fires to update the state
                  ></textarea>
               </div>
            </div>
            <div className="card">
               <div className="card-body bg-secondary lead">
                  <textarea
                     rows="4"
                     id="edit-answer-input"
                     defaultValue={memoryCard.answer}
                     onChange={(e) => this.setAnswerText(e)}
                  ></textarea>
               </div>
            </div>

            <p className="float-right mt-2 mb-5 text-muted">
               <span
                  className={classnames({
                     "text-danger": checkIsOver(
                        this.state.imageryText,
                        MAX_CARD_CHARS
                     ),
                  })}
               >
                  Top: {this.state.imageryText.length}/{MAX_CARD_CHARS}
               </span>
               &nbsp;&nbsp;
               <span
                  className={classnames({
                     "text-danger": checkIsOver(
                        this.state.answerText,
                        MAX_CARD_CHARS
                     ),
                  })}
               >
                  Bottom: {this.state.answerText.length}/{MAX_CARD_CHARS}
               </span>
            </p>
            <div className="clearfix"></div>

            <Link to="/all-cards" className="btn btn-link mt-1">
               Discard changes
            </Link>
            <Link
               to="/all-cards"
               className={classnames(
                  "btn btn-primary btn-lg ml-4 float-right",
                  { disabled: this.checkHasInvalidCharCount() }
               )}
               id="edit-save"
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
                  <p className="mt-1">
                     {toDisplayDate(memoryCard.createdAt, "MMM d, y")}
                  </p>
                  <p className="mt-1">
                     {toDisplayDate(memoryCard.lastAttemptAt, "MMM d, y")}
                  </p>
                  <p className="mt-1">
                     {toDisplayDate(memoryCard.nextAttemptAt, "MMM d, y")}
                  </p>
                  <p className="mt-1">{memoryCard.totalSuccessfulAttempts}</p>
               </div>
            </div>

            <div
               className="custom-control custom-checkbox mt-5 mb-3"
               onClick={() => {
                  this.displayDeleteButton();
               }}
            >
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
            {this.state.isDisplayingDeleteButton && (
               <button
                  type="button"
                  className="btn btn-outline-danger"
                  id="delete-button"
               >
                  Delete this card
               </button>
            )}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
         </AppTemplate>
      );
   }
}
