import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { PokemonApi } from "../Hooks/PokemonHook";

export const store = configureStore({
    reducer: {
        [PokemonApi.reducerPath]: PokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        getDefaultMiddleware().concat(PokemonApi.middleware)
    },
})

// required for refetchOnFocus/refetchonReconnect behaviors
setupListeners(store.dispatch);
