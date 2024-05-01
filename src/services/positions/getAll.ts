import api from "../api";

export interface Position {
  id: number;
  name: string;
}

export async function getAll(): Promise<Position[]> {
  try {
    const { data } = await api.get<Position[]>("/positions");
    return data;
  } catch (error) {
    console.error("Erro ao obter todas as posições:", error);
    throw error;
  }
}
