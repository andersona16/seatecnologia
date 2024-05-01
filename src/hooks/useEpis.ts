import { useQuery } from "@tanstack/react-query";
import { episService } from "../services/epis";

export default function useEpis() {
  const { data, error, isLoading, refetch } = useQuery(["epis"], async () => {
    try {
      const epis = await episService.getAll();
      return epis;
    } catch (error) {
      throw new Error("Failed to fetch epis");
    }
  });

  return {
    epis: data ?? [],
    isError: error,
    isLoading,
    refetch,
  };
}
