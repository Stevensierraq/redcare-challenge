import { getRepos } from "@/services/getRepos";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetInfiniteRepos() {
  const infiniteData = useInfiniteQuery({
    queryFn: getRepos,
    queryKey: ["repos"],
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return {
    ...infiniteData,
    repositories: infiniteData.data?.pages.flatMap((page) => page.repos),
  };
}
