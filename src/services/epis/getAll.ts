import api from "../api";

export interface EPI {
  id: number;
  name: string;
}

export async function getAll(): Promise<EPI[]> {
  try {
    const { data } = await api.get<EPI[]>("/epis");
    return data;
  } catch (error) {
    console.error("Erro ao obter todos os EPIs:", error);
    throw error;
  }
}
