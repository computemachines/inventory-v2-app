import React, { useState } from "react";
import { Router } from "@reach/router";

import "../styles/App.scss";

import "normalize.css";

import NewSkuForm from "./NewSkuForm";
import NewUniqForm from "./NewUniqForm";
import NewBinForm from "./NewBinForm";
// import MoveUnitsForm from "./MoveUnitsForm";
// import ReceiveSkuForm from "./ReceiveSkuForm";
import SearchForm from "./SearchForm";
import Bin from "./Bin";
import Uniq from "./Uniq";
import Sku from "./Sku";
import HamburgerBar from "./HamburgerBar";
import ErrorBoundary from "./ErrorBoundary";
import AlertContext from "./AlertContext";

const FourOhFour = () => {
  var [A, B] = React.useState("404");
  setTimeout(() => B("Four-Oh-Four"), 10000);
  return <h1>{A}</h1>;
};
const App = () => {
  const [alert, setAlert] = useState(null);
  return (
    <div className="app-wrapper">
      <HamburgerBar />
      <div className="main-container">
        <div className="main-content">
          <ErrorBoundary>
            <AlertContext.Provider value={[alert, setAlert]}>
              <div className="main-alert">{alert}</div>
              <Router>
                <NewSkuForm path="/new/sku" />
                <NewUniqForm path="/new/uniq" />
                <NewBinForm path="/new/bin" />
                {/* <MoveUnitsForm path="/move-units" /> */}
                {/* <ReceiveSkuForm path="/receive" /> */}
                <SearchForm path="/search" />
                <Bin path="/bin/:bin_id" />
                <Bin path="/bin/:bin_id/edit" editable />
                <Uniq path="/uniq" />
                <Sku path="/sku" />
                <FourOhFour default />
              </Router>
            </AlertContext.Provider>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default App;
