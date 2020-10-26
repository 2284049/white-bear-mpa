import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";

export default class AllCards extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};

      // EASY CARDS
      // orderBy([totalSuccessfulAttempts, createdAt], [desc, desc])
      // order by total sucessful attempts first in desc order,
      // and then order by created at in desc order

      // HARD CARDS
      // orderBy([totalSuccessfulAttempts, createdAt], [asc, asc])

      // going to reset the successful attempts to 0 if they get it wrong

      // Most Recent
      // orderBy(createdAt, desc)
   }

   render() {
      return (
         <AppTemplate>
            <div className="row my-4">
               <div className="col-8">
                  <input
                     className="form-control form-control-sm"
                     type="text"
                     placeholder="Search for a word"
                  />
               </div>
               <div className="col-4">
                  <button className="btn btn-primary btn-block btn-sm">
                     Search
                  </button>
               </div>
            </div>

            <div className="row my-4 no-gutters">
               <div className="col-4">
                  <p className="text-muted mt-1">Sort cards by</p>
               </div>
               <div className="col-8">
                  <select className="form-control form-control-sm">
                     <option>Most recent</option>
                     <option>Oldest</option>
                     <option>Hardest</option>
                     <option>Easiest</option>
                  </select>
               </div>
            </div>
            {memoryCards.map((memoryCard) => {
               return (
                  <MemoryCard
                     pizza={memoryCard.answer}
                     banana={memoryCard.imagery}
                     key={memoryCard.id}
                  />
               );
            })}
         </AppTemplate>
      );
   }
}
