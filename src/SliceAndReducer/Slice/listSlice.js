import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  lists: [],
  error: "",
};

export const fetchTopic = createAsyncThunk("fetch/topic", () => {
  return axios
    .get(`http://www.mocky.io/v2/5e1d227c3600002a00c73e82`)
    .then((response) => response.data.data);
});

const listSlice = createSlice({
  name: "list",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTopic.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTopic.fulfilled, (state, action) => {
      state.loading = false;
      state.lists = action.payload;
      state.error = "";
    });
    builder.addCase(fetchTopic.rejected, (state, action) => {
      state.loading = false;
      state.lists = [];
      state.error = action.error.message;
    });
  },
});

export default listSlice.reducer;
