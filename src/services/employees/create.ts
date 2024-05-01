import api from "../api";

export interface Employee {
  name: string;
  cpf: string;
  rg: string;
  genre: string;
  dateOfBirth: string | Date;
  empPosition: string;
  usesEPI: boolean;
  EPIS: Array<{
    EPI?: string;
    activity?: string;
    numberCA?: string;
  }>;
  medicalCertificateFile: string | null;
  isActive: boolean;
}

export async function create(employee: Employee) {
  const { data } = await api.post(
    "/employees",
    { ...employee },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
}
