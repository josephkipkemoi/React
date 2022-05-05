import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const PokemonApi = createApi({
    reducerPath: 'PokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
        getPaginatedPokemonCharacters: builder.query({
            query: () => 'pokemon'
        })
    }),
})

export const { useGetPokemonByNameQuery, useGetPaginatedPokemonCharactersQuery } = PokemonApi;

