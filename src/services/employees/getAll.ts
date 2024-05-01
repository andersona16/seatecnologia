import api from "../api";

export interface Employee {
  id: number;
  name: string;
  cpf: string;
  rg: string;
  genre: Genre;
  dateOfBirth: string;
  empPosition: EmpPosition;
  usesEPI: boolean;
  EPIS: EPI[];
  medicalCertificateFile: string | null;
  isActive: boolean;
}

export enum Genre {
  Male = "Male",
  Female = "Female",
}

export enum EmpPosition {
  Manager = "Manager",
  Employee = "Employee",
}

export interface EPI {
  EPI: string;
  activity: string;
  numberCA: string;
}

export async function getAll(): Promise<Employee[]> {
  try {
    const { data } = await api.get<Employee[]>("/employees");
    return data;
  } catch (error) {
    console.error("Erro ao obter todos os funcionários:", error);
    throw error;
  }
}
