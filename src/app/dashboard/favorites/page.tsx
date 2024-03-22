import { FavoritesGrid } from "@/pokemons";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

export const metadata = {
  title: "Favorites Pokemon List",
  description: "Pokemon List page description",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl my-2">
        Pokemons List <small className="text-blue-500">Global State</small>
      </h1>
      <FavoritesGrid />
    </div>
  );
}
