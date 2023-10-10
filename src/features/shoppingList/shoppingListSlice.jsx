import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:5000/shoppingLists";

export const getShoppingLists = createAsyncThunk(
  "getShoppinglists",
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

export const getCurrentList = createAsyncThunk("getCurrentList", async (id) => {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
});

// Updates the whole list data.
// This is done because json-server does not accept nesting like shoppingLists/1/listData
export const updateItem = createAsyncThunk(
  "updateItem",
  async (updatedListData) => {
    try {
      const response = await fetch(`${url}/${updatedListData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedListData),
      });

      if (!response.ok) {
        throw new Error("POST request failed");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: { shoppingLists: [], isLoading: true, currentList: {} },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getShoppingLists.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getShoppingLists.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          shoppingLists: action.payload,
        };
      })
      .addCase(getShoppingLists.rejected, (state) => {
        return {
          ...state,
          isLoading: false,
        };
      });

    builder
      .addCase(getCurrentList.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getCurrentList.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          currentList: action.payload,
        };
      })
      .addCase(getCurrentList.rejected, (state) => {
        return {
          ...state,
          isLoading: false,
        };
      });

    builder
      .addCase(updateItem.pending, (state) => {
        return {
          ...state,
        };
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        return {
          ...state,
          currentList: action.payload,
        };
      })
      .addCase(updateItem.rejected, (state) => {
        return {
          ...state,
        };
      });
  },
});

export const {} = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
