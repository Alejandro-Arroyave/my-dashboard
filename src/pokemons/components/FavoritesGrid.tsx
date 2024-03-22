"use client";
import React, { useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "..";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritesGrid = () => {
  const favorites = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );
  console.log(favorites);
  const [pokemons, _] = useState(favorites);

  return (
    <>
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={favorites} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline className="text-red-500" />
      <span>No favorites</span>
    </div>
  );
};
