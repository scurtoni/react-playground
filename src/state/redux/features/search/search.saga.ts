import api from "../../../../utils/api";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {SearchActionTypes} from "../../common.types";

import models from "@models";
import searchSlice from "./search.slice";

/**
 * TODO: I don't know why but any type other than `any` won't work in the takeEvery below.
 *
 * @param action - This action should contain a payload of type {import('models').TravelsParams}
 */
function* updateSearch(action: any) {
  try {
    //const currentResults = (yield select((state: models.ApplicationState) => state.search.result)) as models.SearchResults;
    //const term: string = action.payload.term;

    const searchResults: models.Person[] = yield call(api.getPeople);

    yield put(searchSlice.actions.updateResults(searchResults));
  } catch (e) {}
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest() {
  yield takeEvery(SearchActionTypes.API_REDUX_LIST_SAGA, updateSearch);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* searchSagas() {
  yield all([fork(watchFetchRequest)]);
}
