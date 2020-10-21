import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import editIcon from "../../icons/edit.svg";

export default function AllCards() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />

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
                  <option selected>Hardest</option>
                  <option>Easiest</option>
               </select>
            </div>
         </div>

         <div className="d-flex align-items-start mb-5">
            <div className="app-cards">
               <div className="card">
                  <div className="card-body bg-primary">
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts. Separated they live in Bookmarksgrove right at the
                     coast of the Semantics, a large language ocean. A small
                     river named Duden flows by their place and supplies it with
                     the necessary re
                  </div>
               </div>
               <div className="card">
                  <div className="card-body bg-secondary">
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                     natoque penatibus et magnis dis parturient montes, nascetur
                     ridiculus mus. Donec quam felis, ultricies nec,
                     pellentesque eu, pretium quis, sem. Nulla consequat massa
                     quis enim. Donec.
                  </div>
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

         <div className="d-flex align-items-start">
            <div className="app-cards">
               <div className="card">
                  <div className="card-body bg-primary">
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts. Separated they live in Bookmarksgrove right at the
                     coast of the Semantics, a large language ocean. A small
                     river named Duden flows by their place and supplies it with
                     the necessary re
                  </div>
               </div>
               <div className="card">
                  <div className="card-body bg-secondary">
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                     natoque penatibus et magnis dis parturient montes, nascetur
                     ridiculus mus. Donec quam felis, ultricies nec,
                     pellentesque eu, pretium quis, sem. Nulla consequat massa
                     quis enim. Donec.
                  </div>
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
      </AppTemplate>
   );
}
