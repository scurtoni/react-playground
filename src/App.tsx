import React from "react";

import {Provider} from "react-redux";
import configureStore from "@state/redux";

import {initi18n} from "@utils/i18n";

//import Debug from "@components/Debug";
initi18n();

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <h1>Hello!</h1>
  </Provider>
);

export default App;
