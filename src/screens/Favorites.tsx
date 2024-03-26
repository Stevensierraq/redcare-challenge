"use client";

import RepoCard from "../components/RepoCard";
import useFavoriteRepos from "@/hooks/useFavoriteRepo";

export default function Favorites() {
  const { favorites } = useFavoriteRepos();

  return (
    <>
      {favorites?.map((repo) => <RepoCard noCTA data={repo} key={repo?.id} />)}
    </>
  );
}
