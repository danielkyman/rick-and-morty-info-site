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
import NavBar from "./components/Navigation/NavBar";
import CharacterSingle from "./pages/Character/CharacterSingle";

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
          <Route exact path="/characters/:id" component={CharacterSingle} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
