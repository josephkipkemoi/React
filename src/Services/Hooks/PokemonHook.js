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
    }),
})

export const { 
    useGetPokemonByNameQuery, 
    useGetPaginatedPokemonCharactersQuery,
    useGetPokemonSpeciesQuery
 } = PokemonApi;

