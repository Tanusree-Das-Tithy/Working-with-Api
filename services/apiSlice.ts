/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BuilderProgram } from "typescript";
import { Data } from "models/common";
import { Characters } from "@/models/ResultCharacter";
export const apiSlice = createApi({
	reducerPath: "apiSlice",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://rickandmortyapi.com/api",
	}),

	tagTypes: ["Character", "Location", "Episode"],
	endpoints: builder => ({
		getCharacters: builder.query<Characters, void>({
			query: id => `/character`,
			providesTags: ["Character"],
		}),

		getLocations: builder.query({
			query: () => "/location",
			providesTags: ["Location"],
		}),
		getEpisodes: builder.query({
			query: () => "/episode",
			providesTags: ["Episode"],
		}),
	}),
});
export const { useGetCharactersQuery, useGetLocationsQuery, useGetEpisodesQuery } = apiSlice;
