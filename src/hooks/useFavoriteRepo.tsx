import { Repository } from "@/entities/Repository";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function useFavoriteRepos() {
  const queryClient = useQueryClient();

  const addFavorite = useMutation({
    mutationFn: async (fav: Repository) => await fav,
    onSuccess: (data: Repository) =>
      queryClient.setQueryData<Repository[]>(["favorites"], (prevFav = []) => {
        return prevFav.length
          ? prevFav.filter((fav) => fav.id !== data.id).concat(data)
          : [data];
      }) as Repository[],
  });

  const { data: favorites } = useQuery<Repository[]>({
    queryKey: ["favorites"],
  });

  const favoritesIds = favorites?.map((repo) => repo.id);

  return {
    favorites,
    addFavorite,
    favoritesIds,
  };
}
