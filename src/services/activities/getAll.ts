import api from "../api";

export interface Activity {
  id: number;
  name: string;
}

export async function getAll(): Promise<Activity[]> {
  try {
    const response = await api.get<Activity[]>("/activities");
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Erro ao buscar todas as atividades:", error);
    throw error;
  }
}
