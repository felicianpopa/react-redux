import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:5000/shoppingList";

export const getShoppingList = createAsyncThunk("getShoppinglist", async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});
const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: { shoppingList: [], isLoading: true },
  extraReducers: (builder) => {
    builder
      .addCase(getShoppingList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getShoppingList.fulfilled, (state, action) => {
        state.isLoading = false;
        console.warn("state ", state);
        state.shoppingList = action.payload;
      })
      .addCase(getShoppingList.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default shoppingListSlice.reducer;
