import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import csrftoken from "./tokent";
export const TodoApi = createApi({
  reducerPath: "TodoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "api",
      tagTypes: ["Employes"],
      providesTags: [{ type: "Emplyedata", id: "employeLIst" }],
    }),
    deleteData: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,
        },
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Emplyedata", id: "employeLIst" }],
    }),

    createData: builder.mutation({
      query: (payload) => ({
        url: "add/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify(payload),
      }),
      invalidatesTags: [{ type: "Emplyedata", id: "employeLIst" }],
    }),
    getupdateData: builder.mutation({
      query: (payload) => ({
        url: `update/${payload.id}`,
        headers:{
          'Content-Type': 'application/json',
          "X-CSRFToken": csrftoken,
        },
        method:"PATCH",
        body:(JSON.stringify(payload))
     })
     ,invalidatesTags: [{ type: "Emplyedata", id: "employeLIst" }],
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useDeleteDataMutation,
  useCreateDataMutation,
  useGetupdateDataMutation,
} = TodoApi;
export const reducerPath = TodoApi.reducerPath;
export const Reducer = TodoApi.reducer;
