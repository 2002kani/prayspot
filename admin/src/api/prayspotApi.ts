import { ENDPOINT } from "@/config/api";
import type { Prayspot } from "@/types/Prayspot";

export const fetchAllPrayspots = async (): Promise<Prayspot[]> => {
  const url = ENDPOINT;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch todos: ${response.statusText}`);
  }

  return response.json();
};
