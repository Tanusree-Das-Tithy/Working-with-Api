/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BuilderProgram } from "typescript";
import { Data } from "models/common";
import { Character } from "@/models/ResultCharacter";
import { Location } from "@/models/ResultLocation";
import { Episode } from "@/models/ResultEpisode";
export const apiSlice = createApi({
	reducerPath: "apiSlice",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://rickandmortyapi.com/api",
	}),

	tagTypes: ["Character", "Location", "Episode"],
	endpoints: builder => ({
		getCharacters: builder.query<Data<Character>, number | void>({
			query: pages => `/character?page=${pages}`,
			providesTags: ["Character"],
		}),

		getLocations: builder.query<Data<Location>, number | void>({
			query: pages => `/location?page=${pages}`,
			providesTags: ["Location"],
		}),
		getEpisodes: builder.query<Data<Episode>, number | void>({
			query: pages => `/episode?page=${pages}`,
			providesTags: ["Episode"],
		}),
	}),
});
export const { useGetCharactersQuery, useGetLocationsQuery, useGetEpisodesQuery } = apiSlice;
