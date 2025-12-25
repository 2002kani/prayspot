import { fetchAllPrayspots } from "@/api/prayspotApi";
import { ENDPOINT } from "@/config/api";
import type { Prayspot } from "@/types/Prayspot";
import useSWR from "swr";

export const usePrayspots = () => {
  const { data, isLoading, mutate, error } = useSWR<Prayspot[]>(
    ENDPOINT,
    fetchAllPrayspots
  );

  return {
    data: data,
    isLoading,
    isError: error,
    mutate,
  };
};
