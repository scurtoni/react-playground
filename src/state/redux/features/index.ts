import {combineReducers} from "@reduxjs/toolkit";
import {all, fork} from "redux-saga/effects";
import searchSlice from "./search/search.slice";
import searchSaga from "./search/search.saga";
import models from "@models";

export const rootReducer = combineReducers<models.ApplicationState>({
  search: searchSlice.reducer
});

export function* rootSaga() {
  yield all([fork(searchSaga)]);
}
