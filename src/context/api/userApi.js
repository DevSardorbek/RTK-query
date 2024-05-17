import { api } from "./index";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getusers: build.query({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["User"],
    }),
    deleteusers: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    postusers: build.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    // getDetailProduct: build.query({
    //   query: (id) => ({
    //     url: `/products/${id}`,
    //   }),
    // }),
  }),
});

export const {
  useDeleteusersMutation,
  useGetusersQuery,
  usePostusersMutation,
} = userApi;
