import { SimplePokemon } from "@/pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokemonsState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

// const getInitialState = (): PokemonsState => {
//   if (typeof localStorage === "undefined") return {};

//   const favorites = JSON.parse(
//     localStorage.getItem("favorite-pokemons") ?? "{}"
//   );

//   return favorites;
// };

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
  // "1": { id: "1", name: "Bulbasaur" },
  // "3": { id: "3", name: "Venusaur" },
  // "6": { id: "6", name: "Charizard" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons: (
      state,
      action: PayloadAction<{
        [key: string]: SimplePokemon;
      }>
    ) => {
      state.favorites = action.payload;
    },
    toggleFavorites: (state, action: PayloadAction<SimplePokemon>) => {
      const { id } = action.payload;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = action.payload;
      }

      //! NO se debe hacer en Redux
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { setFavoritePokemons, toggleFavorites } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
