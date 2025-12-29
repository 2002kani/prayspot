import { fetcher } from "@/api/fetcher";

import { ENDPOINT } from "@/config/api";
import useSWR from "swr";

export const useSpotsMin = () => {
  const { data, mutate, error } = useSWR(`${ENDPOINT}/dashboard`, fetcher);

  return {
    data,
    mutate,
    isError: error,
  };
};
