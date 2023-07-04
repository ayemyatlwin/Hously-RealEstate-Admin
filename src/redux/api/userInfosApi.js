import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userInfosApi = createApi({
  reducerPath: "userInfosApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://admin-api-fb9x.onrender.com` }),
  tagTypes: ["admin"], //auto refresh

  endpoints: (builder) => ({
    getUserInfos: builder.query({
      query: () => `/admin`,
      providesTags: ["admin"], //auto refresh 
    }),
    getDetailUserInfos: builder.query({
      query: (id) => `/admin/${id}`,
      providesTags: ["admin"],
    }),
    editUserInfos: builder.mutation({
        query: (newData) => ({
            url: `/admin/${newData?.id}`,
            method: "PATCH",
            body: newData,
        }),
        invalidatesTags: ["admin"],
    })
  }),
});

export const {
  useGetUserInfosQuery,
  useGetDetailUserInfosQuery,
  useEditUserInfosMutation
} = userInfosApi;