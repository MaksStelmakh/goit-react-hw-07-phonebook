import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6247009e739ac8459195b1e4.mockapi.io/",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getContactByName: builder.query({
      query: () => `contacts`,
      providesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (idContact) => ({
        url: `contacts/${idContact}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
    createContact: builder.mutation({
      query: ({ id, name, number }) => ({
        url: "contacts",
        method: "POST",
        body: {
          id: id,
          name: name,
          phone: number,
        },
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useGetContactByNameQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactApi;
