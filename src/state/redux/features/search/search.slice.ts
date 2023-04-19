import models from "@models";
import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {SearchActionTypes} from "../../common.types";
import api from "@utils/api";

const initialState: models.SearchState = {
  term: "",
  results: []
};

export const fetchRequest = createAsyncThunk(SearchActionTypes.API_REDUX_LIST_THUNK, async () => {
  const response = await api.getPeople();
  return (await response.json()) as models.Person[];
});

export default createSlice({
  name: "search",
  initialState,
  reducers: {
    updateResults: (state, action: PayloadAction<models.Person[]>) => {
      state.results = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRequest.fulfilled, (state, action) => {
      state.results = action.payload;
    });
  }
});
