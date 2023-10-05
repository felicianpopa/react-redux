import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:5000/suggestions";

export const getSuggestions = createAsyncThunk(
  "getSuggestions",
  async (suggestionsText) => {
    const response = await fetch(url);
    const data = await response.json();
    const filteredSuggestions = data.filter((item) =>
      item.includes(suggestionsText)
    );
    return filteredSuggestions;
  }
);

const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState: {
    suggestionsText: null,
    suggestionsData: [],
    isLoading: false,
  },
  reducers: {
    updateSuggestions: (state, { payload }) => {
      return {
        ...state,
        suggestionsText: payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSuggestions.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getSuggestions.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          suggestionsData: action.payload,
        };
      })
      .addCase(getSuggestions.rejected, (state) => {
        return {
          ...state,
          isLoading: false,
        };
      });
  },
});
export const { updateSuggestions } = suggestionsSlice.actions;
export default suggestionsSlice.reducer;
