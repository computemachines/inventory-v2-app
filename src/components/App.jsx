import React, { useState } from "react";
import { Router } from "@reach/router";

import { Provider as ReduxProvider } from "react-redux";

import "../styles/App.scss";

import "normalize.css";

import NewSkuForm from "./NewSkuForm";
import NewBinForm from "./NewBinForm";
// import MoveUnitsForm from "./MoveUnitsForm";
import ReceiveSkuForm from "./ReceiveSkuForm";
import SearchForm from "./SearchForm";
import Bin from "./Bin";
import Sku from "./Sku";
import HamburgerBar from "./HamburgerBar";
import ErrorBoundary from "./ErrorBoundary";
import AlertContext from "./AlertContext";
import NewBatchForm from "./NewBatchForm";

const FourOhFour = () => <h1>404 - not found</h1>;
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
                <NewBinForm path="/new/bin" />
                <NewBatchForm path="/new/batch" />
                {/* <MoveUnitsForm path="/move" /> */}
                <ReceiveSkuForm path="/receive" />
                <SearchForm path="/search" />
                <Bin path="/bin/:binId" />
                <Bin path="/bin/:binId/edit" editable />
                <Sku path="/sku/:skuId" />
                <FourOhFour default />
              </Router>
            </AlertContext.Provider>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

const Root = ({ store }) => (
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

export default Root;
