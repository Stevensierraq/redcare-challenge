"use client";
import RepoCard from "../components/RepoCard";

import { Button, Text } from "@chakra-ui/react";
import useFavoriteRepos from "@/hooks/useFavoriteRepo";
import useGetInfiniteRepos from "@/hooks/useInfiniteRepos";

export default function ReposList() {
  const { fetchNextPage, isFetching, error, repositories, hasNextPage } =
    useGetInfiniteRepos();
  const { addFavorite, favoritesIds } = useFavoriteRepos();

  if (error) {
    return <Text>Oops, an error occurred! Try again</Text>;
  }

  return (
    <>
      {repositories?.map((repo) => (
        <RepoCard
          data={repo}
          key={repo?.id}
          onFavorite={addFavorite.mutate}
          isFavorite={!!favoritesIds?.includes(repo?.id)}
        />
      ))}
      {hasNextPage && isFetching ? (
        <Text>loading...</Text>
      ) : (
        <Button onClick={() => fetchNextPage()}>Load more</Button>
      )}
    </>
  );
}
