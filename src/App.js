import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarCustomized from "./NavBarCustomized";
import routes from "./routes";
import "./App.css";

const App = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <NavBarCustomized />
      <div className="container mt-4">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
