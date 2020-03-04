import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";

//Styles
import "./App.scss";

//page and component exports
import HomePage from "./pages/Home/HomePage";
import CharactersPage from "./pages/Character/CharactersPage";
import LocationsPage from "./pages/Location/LocationsPage";
import EpisodesPage from "./pages/Episode/EpisodesPage";
import Random from "./pages/Randomizer/Random";
import NavBar from "./components/Navigation/NavBar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/characters" component={CharactersPage} />
          <Route exact path="/locations" component={LocationsPage} />
          <Route exact path="/episodes" component={EpisodesPage} />
          <Route exact path="/random" component={Random} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
