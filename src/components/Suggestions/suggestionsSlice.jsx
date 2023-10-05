import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState: { suggestionsText: null, suggestionsData: [] },
  reducers: {
    updateSuggestions: (state, { payload }) => {
      console.warn("suggestions slice", payload);

      return {
        ...state,
        suggestionsText: payload,
      };
    },
  },
  extraReducers: (builder) => {},
});
export const { updateSuggestions } = suggestionsSlice.actions;
export default suggestionsSlice.reducer;
