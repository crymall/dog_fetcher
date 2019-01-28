import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import RandomDog from "./RandomDog";
import RandomByBreed from "./RandomByBreed";

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    };
  }

  addNewFavorite = url => {
    const { favorites } = this.state;
    let newState = [...favorites];
    let newFav = {
      id: Math.random(),
      url: url,
      comments: []
    };

    newState.push(newFav);

    console.log(newState);

    this.setState({
      favorites: newState
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <h1>Home</h1>;
            }}
          />
          <Route
            path="/random"
            render={() => {
              return <RandomDog addNewFavorite={this.addNewFavorite} />;
            }}
          />
          <Route
            path="/by_breed"
            render={() => {
              return <RandomByBreed addNewFavorite={this.addNewFavorite} />;
            }}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
