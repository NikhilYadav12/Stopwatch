import React from "react";
import Provider from "react-redux/lib/components/Provider";
import Appp from "./App";
import configureStore from "./redux/store";
import initialState from "./redux/initialState";

const store = configureStore(initialState);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Appp />
      </Provider>
    );
  }
}
