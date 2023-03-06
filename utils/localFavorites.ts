const toggleFavorites = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  if (typeof Window === "undefined") return false; // Server Side Rendering (SSR

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  toggleFavorites,
  existInFavorites,
  pokemons,
};
