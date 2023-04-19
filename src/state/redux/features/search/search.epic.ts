import {map, mergeMap} from "rxjs/operators";
import {from} from "rxjs";
import {SearchActionTypes} from "../../common.types";
import {ofType} from "redux-observable";
import api from "@utils/api";
import searchSlice from "./search.slice";

// epic
export const searchEpic = (action$) =>
  action$.pipe(
    ofType(SearchActionTypes.API_REDUX_LIST_OBSERVABLE),
    mergeMap((action) => from(api.getPeople()).pipe(map((response) => searchSlice.actions.updateResults(response))))
  );
