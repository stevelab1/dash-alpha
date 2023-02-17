import React from "react";

//routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// animated transitions
import { CSSTransition, TransitionGroup } from "react-transition-group";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <div className="App" 
    // data-test="component-app"
    >
      {/* Wrap App with SearchProvider so context available to all components inside the Router: */}
      <SearchProvider>
        <Router>
          <Header />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Router>
      </SearchProvider>
    </div>
  );
}

export default App;
