import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APP_BACKEND_URL } from "../../constants/constants";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: APP_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, any>({
      query: ({ limit = 4, page = 1 }: any) => ({
        url: `users`,
        params: {
          limit,
          page,
        },
      }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
