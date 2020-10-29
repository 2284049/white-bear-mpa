import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://run.mocky.io/v3/cd3b2851-1a2d-46f4-a491-3ce34f57d4f7")
         .then(function (res) {
            // handle success
            console.log(res);
            props.dispatch({
               type: actions.STORE_QUEUED_CARDS,
               payload: res.data,
            });
         })
         .catch(function (error) {
            // handle error
         });
   }

   render() {
      const memoryCard = this.props.queuedCards[this.props.indexOfCurrentCard];
      return (
         <AppTemplate>
            <div className="card mb-5">
               <div className="card-body bg-primary lead">
                  {memoryCard && memoryCard.imagery}
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
}

function mapStateToProps(state) {
   //global state
   return {
      queuedCards: state.queuedCards,
      indexOfCurrentCard: state.indexOfCurrentCard,
   };
}
export default connect(mapStateToProps)(ReviewImagery);
