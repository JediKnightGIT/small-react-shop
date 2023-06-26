import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { usersAPI } from "../../api/api";

export const appSLice = createApi({
  reducerPath: 'appSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6458f8e24eb3f674df82db75.mockapi.io/"
  }),
  endpoints(builder) {
    return {
      filterItems: builder.query({
        query([platform, sort, order, term, limit = 4, page = 1]) {
          const sortBy = sort ? `sortBy=${sort}` : ''
          const orderBy = order ? `order=${order}` : ''
          const platformId = platform ? `platform=${platform}` : ''
          const search = term ? `search=${term}` : ''

          return `items?page=${page}&limit=${limit}&${platformId}&${sortBy}&${orderBy}&${search}`
        }
      })
    }
  }
})

export const { useFilterItemsQuery } = appSLice

// export default filterSlice.reducer;
