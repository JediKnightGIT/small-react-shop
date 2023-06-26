import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id && obj.platform === action.payload.platform)

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return round(obj.price * obj.count + sum)
      }, 0)
      state.count++

      console.log(current(state.items))
    },
    removeItem(state, action) {
      const copy = state.items.filter((obj) => obj.id === action.payload.id)

      const temp = copy.filter((item) => item.platform !== action.payload.platform)
      const rest = state.items.filter((item) => item.id !== action.payload.id)

      const selectItems = state.items.filter((obj) => obj.id === action.payload.id && obj.platform === action.payload.platform)
      const selectItemsCount = selectItems.reduce((sum, item) => sum + item.count, 0)
      const selectItemsPrice = selectItems.reduce((sum, item) => sum + item.price * item.count, 0)

      state.items = [...temp, ...rest]
      state.count = state.count - selectItemsCount
      state.totalPrice = round(state.totalPrice - selectItemsPrice)
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id && obj.platform === action.payload.platform)

      if (findItem) {
        findItem.count--
        state.count--
        state.totalPrice = round(state.totalPrice - findItem.price)
      }
    },
    clearItems(state) {
      state.items = []
      state.count = 0
      state.totalPrice = 0
    },
  },
});

export function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

export const cartSelector = (state) => state.cart
export const cartItemSelector = (id) => (state) => state.cart.items.filter((obj) => obj.id === id)

export const {
  addItem, removeItem, minusItem, clearItems
} = cartSlice.actions;
export default cartSlice.reducer;
