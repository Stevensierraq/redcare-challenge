// TODO: move constants to a separate file .env
const ITEMS_PER_PAGE = 10;
const BASE_URL = "https://api.github.com/search/repositories";

export const getRepos = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `${BASE_URL}?q=created:2023-01-10&sort=stars&order=desc&per_page=${ITEMS_PER_PAGE}&page=${pageParam}`,
  );
  const linkHeader = res.headers.get("link");
  const hasNextPage = linkHeader?.includes('rel="next"');
  const { items } = await res.json();
  return { repos: items, hasNextPage, nextPage: pageParam + 1 };
};
