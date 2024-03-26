import { getRepos } from "@/services/getRepos";
import { QueryClient } from "@tanstack/react-query";

export default async function usePrefetchQueries(queryClient: QueryClient) {
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["repos"],
    queryFn: async () => {
      const response = getRepos({});
      return response;
    },
    initialPageParam: 1,
  });

  await queryClient.prefetchQuery({
    queryKey: ["favorites"],
    queryFn: async () => {
      return [];
    },
  });
}
