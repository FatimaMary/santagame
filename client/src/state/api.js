import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Provider } from "react-redux";

export const api = createApi({
    baseQuery : fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: ["Users", "PlayGroup", "GroupPlayer"],
    endpoints: (build) => ({
        postUser: build.query({
            query: () => "giftuser/add",
            providesTags: ["Users"],
        }),
        getUser: build.query({
            query: () => "giftuser/all",
            providesTags: ["Users"],
        }),
        getSingleUser: build.query({
            query: (id) => `giftuser/${id}`,
            providesTags: ["Users"],
        }),
        postPlayGroup: build.query({
            query: () => "group/addgroup",
            providesTags: ["PlayGroup"],
        }),
        getAllGroups: build.query({
            query: () => "group/all",
            providesTags: ["PlayGroup"],
        }),
        getGroupById: build.query({
            query: (id) => `group/single/${id}`,
            providesTags: ["PlayGroup"],
        }),
        postGroupPlayer: build.query({
            query: () => "players/add",
            providesTags: ["GroupPlayer"],
        }),
        getAllGroupPlayers: build.query({
            query: () => "players/all",
            providesTags: ["GroupPlayer"],
        }),
        updateGroupPlayer: build.query({
            query: (id) => `players/update/${id}`,
            providesTags: ["GroupPlayer"],
        }),
        getAllPlayersById: build.query({
            query: (id) => `players/get/${id}`,
            providesTags: ["GroupPlayer"],
        }),
    }),
});

export const {
    usePostUserQuery,
    useGetUserQuery,
    useGetSingleUserQuery,
    usePostPlayGroupQuery,
    useGetAllGroupsQuery,
    useGetAllGroupPlayersQuery,
    usePostGroupPlayerQuery,
    useUpdateGroupPlayerQuery,
    useGetAllPlayersByIdQuery,
    useGetGroupByIdQuery,
} = api;