import models from "@models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SearchState, SearchResults} from "@models";

const initialState: SearchState = {
  term: "",
  results: []
};

export default createSlice({
  name: "search",
  initialState,
  reducers: {
    updateResults: (state, action: PayloadAction<SearchResults>) => {
      state.results = action.payload;
    }
  }
});
