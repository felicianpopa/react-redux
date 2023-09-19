import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import shoppingListSlice from "./features/shoppingList/shoppingListSlice";

export const store = configureStore({
  reducer: {
    shopping: shoppingListSlice,
  },
});
