import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";

export const ServiceContext = createContext();

function App() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    <div className="App">
      <ServiceContext.Provider value={[services, setServices]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </ServiceContext.Provider>
    </div>
  );
}

export default App;
