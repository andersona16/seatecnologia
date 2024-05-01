import { useQuery } from "@tanstack/react-query";
import { positionsService } from "../services/positions";

export default function usePositions() {
  const { data, error, isLoading, refetch } = useQuery(
    ["positions"],
    async () => {
      try {
        const positions = await positionsService.getAll();
        return positions;
      } catch (error) {
        throw new Error("Failed to fetch positions");
      }
    }
  );

  return {
    positions: data ?? [],
    isError: error,
    isLoading,
    refetch,
  };
}
