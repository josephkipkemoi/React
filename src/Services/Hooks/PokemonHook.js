import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const PokemonApi = createApi({
    reducerPath: 'PokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
        getPaginatedPokemonCharacters: builder.query({
            query: ({offset, limit}) => `pokemon?offset=${offset}&limit=${limit}`,
        }),
        getPokemonSpecies: builder.query({
            query: (id) => `pokemon-species/${id}`,
        }),
        getPokemonColors: builder.query({
            query: (color) => `pokemon-color/${color}`
        }),
    }),
})

export const { 
    useGetPokemonByNameQuery, 
    useGetPaginatedPokemonCharactersQuery,
    useGetPokemonSpeciesQuery,
    useGetPokemonColorsQuery,
 } = PokemonApi;

