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

export const updatePrayspotStatus = async (
  id: number,
  prayspot: Prayspot
): Promise<Prayspot> => {
  const response = await fetch(`${ENDPOINT}/spot/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(prayspot),
  });

  if (!response.ok) {
    throw new Error(`Failed to update todo: ${response.statusText}`);
  }

  return response.json();
};
