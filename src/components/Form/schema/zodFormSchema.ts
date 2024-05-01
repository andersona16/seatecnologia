import { z } from "zod";

const errorMessages = {
  required: "Obrigatório",
  cpfInvalid: "CPF inválido",
  rgInvalid: "RG inválido",
  epiRequired: "Obrigatório quando o EPI é utilizado",
};

const rgValidator = (rg: string) => {
  const regex = /^(\d{1,2}\.\d{3}\.\d{3}(-\d{1}|\d{2})?|\d{7})$/;
  return regex.test(rg);
};

const cpfValidator = (cpf: string) => {
  const regex = /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
  return regex.test(cpf);
};

const validateCPF = (value: string) => ({
  isValid: cpfValidator(value),
  errorMessage: errorMessages.cpfInvalid,
});

const validateRG = (value: string) => ({
  isValid: rgValidator(value),
  errorMessage: errorMessages.rgInvalid,
});

export const zodFormSchema = z
  .object({
    isActive: z.boolean().optional(),
    name: z.string().nonempty({ message: errorMessages.required }),
    cpf: z
      .string()
      .nonempty({ message: errorMessages.required })
      .refine(validateCPF, { message: errorMessages.cpfInvalid }),
    rg: z
      .string()
      .nonempty({ message: errorMessages.required })
      .refine(validateRG, { message: errorMessages.rgInvalid }),
    genre: z.string().nonempty({ message: errorMessages.required }),
    dateOfBirth: z.date(),
    empPosition: z.string().nonempty({ message: errorMessages.required }),
    usesEPI: z.boolean().optional(),
    medicalCertificateFile: z.instanceof(FileList).optional(),
    EPIS: z
      .array(
        z.object({
          activity: z.string().optional(),
          EPI: z.string().optional(),
          numberCA: z.string().optional(),
        })
      )
      .optional(),
  })
  .superRefine(({ usesEPI, EPIS }, ctx) => {
    if (usesEPI) {
      EPIS!.forEach((EPI, index) => {
        if (!EPI.EPI) {
          ctx.addIssue({
            message: errorMessages.required,
            code: z.ZodIssueCode.custom,
            path: [`EPIS[${index}].EPI`],
          });
        }

        if (!EPI.activity) {
          ctx.addIssue({
            message: errorMessages.required,
            code: z.ZodIssueCode.custom,
            path: [`EPIS[${index}].activity`],
          });
        }

        if (!EPI.numberCA) {
          ctx.addIssue({
            message: errorMessages.required,
            code: z.ZodIssueCode.custom,
            path: [`EPIS[${index}].numberCA`],
          });
        }
      });
    }
  });

export type FormData = z.infer<typeof zodFormSchema>;
