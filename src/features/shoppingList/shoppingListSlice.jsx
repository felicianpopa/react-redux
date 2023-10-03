import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:5000/shoppingList";

export const getShoppingList = createAsyncThunk("getShoppinglist", async () => {
  const response = await fetch(url);
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
  initialState: { shoppingList: [], isLoading: true },
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
      .addCase(getShoppingList.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getShoppingList.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          shoppingList: action.payload,
        };
      })
      .addCase(getShoppingList.rejected, (state) => {
        return {
          ...state,
          isLoading: false,
        };
      });

    builder
      .addCase(addItem.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(addItem.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          shoppingList: [...state.shoppingList, action.payload],
        };
      })
      .addCase(addItem.rejected, (state) => {
        return {
          ...state,
          isLoading: false,
        };
      });

    builder
      .addCase(updateItem.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
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
        return {
          ...state,
          isLoading: false,
        };
      });
  },
});

export const { toggleChecked } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
