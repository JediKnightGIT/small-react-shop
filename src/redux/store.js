import { configureStore } from '@reduxjs/toolkit'

import { itemsSLice } from './slices/items-slice'
import filterSlice from './slices/filter-slice'
import cartSlice from './slices/cart-slice'

const store = configureStore({
  reducer: {
    [itemsSLice.reducerPath]: itemsSLice.reducer,
    filter: filterSlice,
    cart: cartSlice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(itemsSLice.middleware)
  }
})

window.store = store

export const RootState = store.getState
export const AppDispatch = store.dispatch

export default store