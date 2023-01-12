import {configureStore} from "@reduxjs/toolkit";

//import { rootReducer, rootSaga, rootEpic } from "./features/index";
import {rootReducer, rootEpic} from "./features/index";
import sagaMiddleware from "./middlewares/saga.middleware";
import reduxMiddleware from "./middlewares/redux.middleware";
import epicMiddleware from "./middlewares/epic.middleware";

//TODO integrate history

const middleware = [...reduxMiddleware, sagaMiddleware, epicMiddleware];

export default () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware
    //  preloadedState,
  });
  //sagaMiddleware.run(rootSaga);
  epicMiddleware.run(rootEpic);
  return store;
};
