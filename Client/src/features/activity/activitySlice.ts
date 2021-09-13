import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface ActivityState {
  input: string;
  output: string;
}

const initialState: ActivityState = {
  input: "",
  output: "",
};

export const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    setInput: (state, action: { payload: { value: string } }) => {
      console.log("Setting state.input to " + action.payload.value);
      state.input = action.payload.value;
    },
    setOutput: (state, action: { payload: { value: string } }) => {
      console.log("Setting state.output to " + action.payload.value);
      state.output = action.payload.value;
    },
  },
});

export const { setInput, setOutput } = activitySlice.actions;

export const selectActivity = (state: RootState) => state.activity;

export default activitySlice.reducer;
