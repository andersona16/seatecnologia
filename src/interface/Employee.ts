enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

interface EPI {
  EPI: string;
  activity: string;
  numberCA: string;
}

export interface Employee {
  id: number;
  name: string;
  cpf: string;
  rg: string;
  gender: Gender;
  dateOfBirth: Date;
  empPosition: string;
  usesEPI: boolean;
  EPIS: EPI[];
  medicalCertificateFile: string | null;
  isActive: boolean;
}
