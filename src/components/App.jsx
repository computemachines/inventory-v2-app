import React from "react";
import { useRoutes } from "hookrouter";

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

const routes = {
  "/new/sku": () => <NewSkuForm />,
  "/new/uniq": () => <NewUniqForm />,
  "/new/bin": () => <NewBinForm />,
  "/move-units": () => <MoveUnitsForm />,
  "/receive": () => <ReceiveSkuForm />,
  "/search": () => <SearchForm />,
  "/bin/:id": () => <Bin />,
  "/bin/:id/edit": () => <Bin editable />,
  "/uniq": () => <Uniq />,
  "/sku": () => <Sku />,
};

const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <div className="app-wrapper">
      <HamburgerBar />
      <div className="main-container">
        <div className="main-content">{routeResult || <FourOhFour />}</div>
      </div>
    </div>
  );
};

export default App;
