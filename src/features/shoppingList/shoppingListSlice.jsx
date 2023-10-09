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

export const addItem = createAsyncThunk("addItem", async (postData) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error("POST request failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const updateItem = createAsyncThunk("updateItem", async (item) => {
  try {
    const response = await fetch(`${url}/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error("PUT request failed");
    }
    const data = response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
});

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: { shoppingLists: [], isLoading: true, currentList: {} },
  reducers: {
    toggleChecked: (state, { payload }) => {
      const listItem = state.shoppingList.find(
        (item) => item.id === payload.id
      );
      listItem.checked = listItem.checked ? false : true;
    },
  },
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
      .addCase(addItem.pending, (state) => {
        return {
          ...state,
        };
      })
      .addCase(addItem.fulfilled, (state, action) => {
        return {
          ...state,
          shoppingList: [...state.shoppingList, action.payload],
        };
      })
      .addCase(addItem.rejected, (state) => {
        return {
          ...state,
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
          shoppingList: state.shoppingList.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                ...action.payload,
              };
            }
            return item;
          }),
        };
      })
      .addCase(updateItem.rejected, (state) => {
        return {};
      });
  },
});

export const { toggleChecked } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
