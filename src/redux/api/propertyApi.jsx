import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://properties-ycl0.onrender.com`,
  }),
  tagTypes: ["property"],

  endpoints: (builder) => ({
    getProperty: builder.query({
      query: () => `/property`,
      providesTags: ["property"],
    }),
    getDetailProperty: builder.query({
      query: (id) => `/property/${id}`,
      providesTags: ["property"],
    }),
    createProperty: builder.mutation({
      query: (property) => ({
        url: "/property",
        method: "POST",
        body: property,
      }),
      invalidatesTags: ["property"],
    }),
    deleteProperty: builder.mutation({
      query: (id) => ({
        url: `/property/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["property"],
    }),
    editProperty: builder.mutation({
      query: (newData) => ({
        url: `/property/${newData?.id}`,
        method: "PATCH",
        body: newData,
      }),
      invalidatesTags: ["property"],
    })
    
  }),
});

export const {
  useGetPropertyQuery,
  useGetDetailPropertyQuery,
  useCreatePropertyMutation,
  useDeletePropertyMutation,
  useEditPropertyMutation,
} = propertyApi;
