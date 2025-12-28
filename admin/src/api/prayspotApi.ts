import { ENDPOINT } from "@/config/api";
import type { Prayspot } from "@/types/Prayspot";
import type { PrayspotRequestDto } from "@/types/PrayspotRequestDto";

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
    throw new Error(`Failed to update Prayspot: ${response.statusText}`);
  }

  return response.json();
};

export const deletePrayspotById = async (id: number) => {
  const response = await fetch(`${ENDPOINT}/spot/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete Prayspot: ${response.statusText}`);
  }
};

export const createPrayspot = async (
  prayspot: PrayspotRequestDto
): Promise<Prayspot> => {
  const response = await fetch(`${ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(prayspot),
  });

  if (!response.ok) {
    throw new Error(`Failed to create Prayspot: ${response.statusText}`);
  }

  return response.json();
};
