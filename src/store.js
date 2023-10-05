import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import shoppingListSlice from "./features/shoppingList/shoppingListSlice";
import suggestionsSlice from "./components/Suggestions/suggestionsSlice";

export const store = configureStore({
  reducer: {
    shopping: shoppingListSlice,
    suggestions: suggestionsSlice,
  },
});
