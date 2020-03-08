import App from "next/app";
import { withRouter } from "next/router";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { createStore, compose, applyMiddleware } from "redux";

import reducer from "../reducers";

const configureStore = (initialState, options) => {
  const middlewares = [];

  const enhancer = compose(applyMiddleware(...middlewares));

  const store = createStore(reducer, initialState, enhancer);
  return store;
};

class MyApp extends App {
  render() {
    const { Component, pageProps, router, store } = this.props;

    return (
      <Provider store={store}>
        <Component router={router} {...pageProps} />
      </Provider>
    );
  }
}

export default compose(withRouter, withRedux(configureStore))(App);
