import useSWR from "swr";
import { fetcher } from "../api/fetcher";
import { API_ENDPOINTS } from "../config/api";
import { Prayspot } from "../types/prayspot";

export const usePrayspots = () => {
  const { data, mutate, isLoading, error } = useSWR<Prayspot[]>(
    API_ENDPOINTS.prayspots,
    fetcher
  );

  return {
    spots: data,
    mutate,
    isLoading,
    isError: error,
  };
};
