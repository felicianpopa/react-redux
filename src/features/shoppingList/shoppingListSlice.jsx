import { createSlice } from "@reduxjs/toolkit";

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: { shoppinglist: [] },
});

export default shoppingListSlice.reducer;
