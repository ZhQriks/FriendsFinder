import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APP_BACKEND_URL } from "../../constants/constants";

export const usersApi = createApi({
  //Create api for users
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: APP_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, any>({
      //Get all users
      query: ({ limit = 4, page = 1 }: any) => ({
        //Query to get all users
        url: `users`,
        params: {
          //Setting params to make pagination easier
          limit,
          page,
        },
      }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
