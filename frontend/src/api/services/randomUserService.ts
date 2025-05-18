import { randomUserClient } from "../randomUserClient";

export const getRandomUsers = async ({ page }: { page: number }) => {
  const res = await randomUserClient.get(`?results=50&page=${page}`);
  return res.data.results;
};
