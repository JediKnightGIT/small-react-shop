import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  platformId: 0,
  order: 'desc',
  sort: {
    sortId: 0,
    name: 'popularity',
    property: "rating"
  },
  search: '',
  page: 1
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPlatformId(state, action) {
      state.platformId = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setOrder(state) {
      state.order = state.order.length === 4 ? 'asc' : 'desc'
    },
    setSearch(state, action) {
      state.search = action.payload
    },
    setPage(state, action) {
      state.page = action.payload
    },
    setFilter(state, action) {
      state.sort = action.payload.sort
      state.platformId = +action.payload.platformId
      state.page = +action.payload.page
      state.platformId = +action.payload.platformId
    },
  },
});

export const filterSelector = (state) => state.filter
export const searchSelector = (state) => state.filter.search

export const {
  setPlatformId,
  setSort,
  setOrder,
  setSearch,
  setPage,
  setFilter
} = filterSlice.actions;
export default filterSlice.reducer;
