import { useQuery } from "@tanstack/react-query";
import { employeesService } from "../services/employees";

export default function useEmployees() {
  const { data, error, isLoading, refetch } = useQuery(
    ["employees"],
    async () => {
      try {
        const employees = await employeesService.getAll();
        return employees;
      } catch (error) {
        throw new Error("Failed to fetch employees");
      }
    }
  );

  return {
    employees: data ?? [],
    isError: error,
    isLoading,
    refetch,
  };
}
