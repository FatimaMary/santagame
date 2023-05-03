import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Provider } from "react-redux";

export const api = createApi({
    baseQuery : fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: ["Users", "Groupname"],
    endpoints: (build) => ({
        postUser: build.query({
            query: () => "user/add",
            providesTags: ["Users"],
        }),
        getUser: build.query({
            query: () => "user/all",
            providesTags: ["Users"],
        }),
        getSingleUser: build.query({
            query: (id) => `user/${id}`,
            providesTags: ["Users"],
        }),
        postPlayGroup: build.query({
            query: () => "group/addgroup",
            providesTags: ["Groupname"],
        }),
        getAllGroups: build.query({
            query: () => "group/all",
            providesTags: ["Groupname"],
        }),
    }),
});

export const {
    usePostUserQuery,
    useGetUserQuery,
    useGetSingleUserQuery,
    usePostPlayGroupQuery,
    useGetAllGroupsQuery,
} = api;