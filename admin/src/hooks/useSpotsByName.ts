import { ENDPOINT } from "@/config/api";
import { fetcher } from "@/api/fetcher";
import useSWR from "swr";
import type { Prayspot } from "@/types/Prayspot";

export const useSpotsByName = (name: string) => {
  const { data, error, isLoading, mutate } = useSWR<Prayspot[]>(
    `${ENDPOINT}/spot/search?name=${name}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
