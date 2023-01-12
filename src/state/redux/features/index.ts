import {combineReducers} from "@reduxjs/toolkit";
import {all, fork} from "redux-saga/effects";
import {combineEpics} from "redux-observable";
import searchSlice from "./search/search.slice";
import searchSaga from "./search/search.saga";
import {searchEpic} from "./search/search.epic";
import models from "@models";

export const rootReducer = combineReducers<models.ApplicationState>({
  search: searchSlice.reducer
});

export function* rootSaga() {
  yield all([fork(searchSaga)]);
}

export const rootEpic = combineEpics(searchEpic);
