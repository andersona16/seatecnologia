import { useQuery } from "@tanstack/react-query";
import { activitiesService } from "../services/activities";

export default function useActivities() {
  const { data, error, isLoading, refetch } = useQuery(["activities"], async () => {
    try {
      const activities = await activitiesService.getAll();
      return activities;
    } catch (error) {
      throw new Error("Failed to fetch activities");
    }
  });

  return {
    activities: data ?? [],
    isError: error,
    isLoading,
    refetch,
  };
}
