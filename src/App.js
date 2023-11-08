import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import BasicForm from "./components/BasicForm";
import MultiForm from "./components/MultiForm";

const App = () => {
  return (
    <Router>
      <nav className="container flex justify-around py-8 mx-auto bg-white">
        <div>
          <h3 className="text-2xl font-medium text-blue-500">React Forms</h3>
        </div>
        <div className="space-x-8">
          <NavLink to="/">Single Form</NavLink>
          <NavLink to="/multiform">Multiform</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<BasicForm />} />
        <Route path="/multiform" element={<MultiForm />} />
      </Routes>
    </Router>
  );
};

export default App;
