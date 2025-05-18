import { randomUserClient } from "../randomUserClient";

export const getRandomUsers = async ({ page = 1 }: { page: number }) => {
  const res = await randomUserClient.get(`?results=50&page=${page}`);
  return res.data.results;
};
