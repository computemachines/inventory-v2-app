import React from "react";
import { Router } from "@reach/router";

import "../styles/App.scss";

import "normalize.css";

import NewSkuForm from "./NewSkuForm";
import NewUniqForm from "./NewUniqForm";
import NewBinForm from "./NewBinForm";
import MoveUnitsForm from "./MoveUnitsForm";
import ReceiveSkuForm from "./ReceiveSkuForm";
import SearchForm from "./SearchForm";
import Bin from "./Bin";
import Uniq from "./Uniq";
import Sku from "./Sku";
import HamburgerBar from "./HamburgerBar";
// import ErrorBoundary from "./ErrorBoundary";

const FourOhFour = () => {
  var [A, B] = React.useState("404");
  setTimeout(() => B("Four-Oh-Four"), 10000);
  return <h1>{A}</h1>;
};
const App = () => {
  return (
    <div className="app-wrapper">
      <HamburgerBar />
      <div className="main-container">
        <div className="main-content">
          <Router>
            <NewSkuForm path="/new/sku" />
            <NewUniqForm path="/new/uniq" />
            <NewBinForm path="/new/bin" />
            <MoveUnitsForm path="/move-units" />
            <ReceiveSkuForm path="/receive" />
            <SearchForm path="/search" />
            <Bin path="/bin/:id" />
            <Bin path="/bin/:id/edit" editable />
            <Uniq path="/uniq" />
            <Sku path="/sku" />
            <FourOhFour path="/" />
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
