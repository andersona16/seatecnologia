import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { FormData, zodFormSchema } from "./schema/zodFormSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { employeesService } from "../../services/employees";
import { useSelector } from "../../hooks/useSelector";
import { useDispatch } from "react-redux";
import { hideForm, setCompletedStage } from "../../redux/actions";
import usePositions from "../../hooks/usePositions";
import useActivities from "../../hooks/useActivities";
import useEpis from "../../hooks/useEpis";
import { toast } from "react-hot-toast";

export default function useFormController() {
  const [notUsesEPI, setNotUsesEPI] = useState(false);
  const [selectedPhotoName, setSelectedPhotoName] = useState<
    string | undefined
  >("");

  const isFormVisible = useSelector((state) => state.dashboard.formVisible);
  const dispatch = useDispatch();

  const { epis, isError: isErrorEpis } = useEpis();
  const { positions, isError: isErrorPositions } = usePositions();
  const { activities, isError: isErrorActivities } = useActivities();

  const isError = isErrorEpis || isErrorPositions || isErrorActivities;

  const {
    control,
    formState: { errors },
    handleSubmit: hookFormHandleSubmit,
    register,
    resetField,
    clearErrors,
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(zodFormSchema),
    defaultValues: {
      EPIS: [{ activity: "", EPI: "", numberCA: "" }],
    },
  });

  const medicalCertificateFiles = watch("medicalCertificateFile");

  const { fields, append, remove } = useFieldArray({
    control,
    name: "EPIS",
  });

  const queryClient = useQueryClient();
  const { mutateAsync: asyncMutation } = useMutation(employeesService.create);

  useEffect(() => {
    if (notUsesEPI) {
      clearErrors(["EPIS"]);
      resetField("EPIS");
    }
  }, [notUsesEPI, clearErrors, resetField]);

  useEffect(() => {
    if (medicalCertificateFiles && medicalCertificateFiles.length > 0) {
      setSelectedPhotoName(medicalCertificateFiles?.[0].name);
    }
  }, [medicalCertificateFiles]);

  useEffect(() => {
    if (isError) {
      toast.error("Ops! Ocorreu um erro ao carregar os dados dos selects!");
    }
  }, [isError]);

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    const {
      cpf,
      dateOfBirth,
      empPosition,
      genre,
      name,
      rg,
      EPIS,
      medicalCertificateFile,
      isActive,
      usesEPI,
    } = data;

    try {
      await asyncMutation({
        name,
        cpf,
        EPIS:
          EPIS?.filter((epi) => epi.EPI && epi.activity && epi.numberCA) || [],
        dateOfBirth,
        empPosition,
        genre,
        isActive: Boolean(isActive),
        medicalCertificateFile: medicalCertificateFile?.[0]?.name || null,
        rg,
        usesEPI: Boolean(usesEPI),
      });

      dispatch(setCompletedStage(true));
      dispatch(hideForm());
      setNotUsesEPI(false);
      queryClient.invalidateQueries(["employees"]);
      toast.success("Funcionário cadastrado com sucesso!");
      reset();
    } catch {
      reset();
      toast.error("Erro ao cadastrar funcionário. Por favor, tente novamente.");
    }
  });

  return {
    notUsesEPI,
    selectedPhotoName,
    control,
    errors,
    epis,
    activities,
    positions,
    isError,
    isFormVisible,
    fields,
    dispatch,
    setNotUsesEPI,
    handleSubmit,
    register,
    append,
    remove,
  };
}
