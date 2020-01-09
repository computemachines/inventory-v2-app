import React from "react";
import { Route, Switch } from "react-router-dom";

import "../styles/App.css";
import "normalize.css";

import Navbar from "./Navbar";
import NewSkuForm from "./NewSkuForm";
import NewUniqForm from "./NewUniqForm";
import NewBinForm from "./NewBinForm";
import MoveUnitsForm from "./MoveUnitsForm";
import ReceiveSkuForm from "./ReceiveSkuForm";
import SearchForm from "./SearchForm";
import Bin from "./Bin";
import Uniq from "./Uniq";
import Sku from "./Sku";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <div className="app-wrapper">
    <div className="sidebar">
      <div className="branding">
        <div className="logo" />
        <h2>Branding</h2>
      </div>
      <Navbar />
    </div>
    <div className="main-container">
      <div className="main-content">
        <Switch>
          <Route path="/new/sku" component={NewSkuForm} />
          <Route path="/new/uniq" component={NewUniqForm} />
          <Route path="/new/bin" component={NewBinForm} />
          <Route path="/move-units" component={MoveUnitsForm} />
          <Route path="/receive" component={ReceiveSkuForm} />
          <Route path="/search" component={SearchForm} />
          <Route path="/bin/:id" component={Bin} />
          <Route path="/uniq" component={Uniq} />
          <Route path="/sku" component={Sku} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
