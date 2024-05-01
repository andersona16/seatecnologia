import { ArrowLeft } from "lucide-react";
import { Controller } from "react-hook-form";

import { hideForm } from "../../redux/actions";
import Button from "../Button";
import Switch from "../Switch";
import Checkbox from "./components/Checkbox/Checkbox";
import DatePickerInput from "./components/DatePickerInput/DatePickerInput";
import Input from "./components/Input/Input";
import Radio from "./components/Radio/Radio";
import Select from "./components/Select/Select";
import { ContainerForm, ContentForm } from "./styles";
import useFormController from "./useFormController";

const Form = () => {
  const {
    errors,
    fields,
    isFormVisible,
    control,
    positions,
    activities,
    epis,
    notUsesEPI,
    selectedPhotoName,
    append,
    dispatch,
    handleSubmit,
    register,
    setNotUsesEPI,
  } = useFormController();

  if (!isFormVisible) {
    return null;
  }

  return (
    <ContainerForm>
      <header>
        <button onClick={() => dispatch(hideForm())}>
          <ArrowLeft />
        </button>
        <h2>Adicionar funcionário</h2>
      </header>

      <div
        style={{ padding: "1rem 0.5rem 1.5rem 1rem" }}
        onSubmit={handleSubmit}
      >
        <form>
          <div
            style={{
              marginTop: "1rem",
              height: "43px",
              padding: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "10px",
              border: "1px solid blue",
              width: "100%",
            }}
          >
            <span>O trabalhador está ativo ou inativo ?</span>

            <Controller
              control={control}
              name="isActive"
              defaultValue={true}
              render={({ field: { onChange, value } }) => (
                <Switch
                  onChange={(newValue) => onChange(newValue)}
                  checked={Boolean(value)}
                  checkedIcon={
                    <span
                      style={{
                        fontSize: "0.75rem",
                        left: "0.5rem",
                        top: "0.25rem",
                        position: "absolute",
                      }}
                    >
                      ativo
                    </span>
                  }
                  uncheckedIcon={
                    <span
                      style={{
                        fontSize: "0.75rem",
                        right: "0.25rem",
                        top: "0.25rem",
                        position: "absolute",
                      }}
                    >
                      inativo
                    </span>
                  }
                />
              )}
            />
          </div>

          <ContentForm>
            <div>
              <div>
                <div>
                  <Input
                    label="Nome"
                    {...register("name")}
                    error={errors.name?.message}
                  />
                </div>

                <div>
                  <Input
                    label="CPF"
                    {...register("cpf")}
                    error={errors.cpf?.message}
                  />
                </div>

                <div>
                  <Input
                    label="RG"
                    {...register("rg")}
                    error={errors.rg?.message}
                  />
                </div>
              </div>

              <div>
                <div>
                  <span>Sexo</span>
                  <Controller
                    control={control}
                    name="genre"
                    defaultValue=""
                    render={({ field: { onChange } }) => (
                      <Radio
                        error={errors.genre?.message}
                        onChange={onChange}
                        options={[
                          { value: "M", label: "Masculino" },
                          { value: "F", label: "Feminino" },
                        ]}
                      />
                    )}
                  />
                </div>

                <div>
                  <Controller
                    control={control}
                    defaultValue={new Date(2000, 5)}
                    name="dateOfBirth"
                    render={({ field: { value, onChange } }) => (
                      <DatePickerInput onChange={onChange} value={value} />
                    )}
                  />
                </div>

                <div>
                  <span>Cargo</span>
                  <Controller
                    control={control}
                    name="empPosition"
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                      <Select
                        error={errors.empPosition?.message}
                        onChange={onChange}
                        value={value}
                        options={positions}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </ContentForm>

          <div
            style={{
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              display: "grid",
              gap: "10px",
              gridAutoRows: "minmax(0, auto)",
              width: "100%",
              border: "1px solid #3182CE",
              minHeight: "294px",
              borderRadius: "10px",
              padding: "0.75rem",
            }}
          >
            <span style={{ fontWeight: "500", color: "#718096" }}>
              Quais EPIs o trabalhador usa na atividade?
            </span>

            <div style={{ marginTop: "0.75rem" }}>
              <Controller
                control={control}
                name="usesEPI"
                defaultValue={true}
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    value={value as unknown as string}
                    onChanges={(newValue) => {
                      onChange(newValue);
                      setNotUsesEPI(!newValue as boolean);
                    }}
                    placeholder="O trabalhador não usa EPI."
                  />
                )}
              />
            </div>

            {fields.map((field, index) => (
              <div
                key={field.id}
                style={{
                  width: "100%",
                  border: "1px solid #3182CE",
                  minHeight: "159px",
                  borderRadius: "10px",
                  padding: "0.75rem",
                  backgroundColor: notUsesEPI ? "#CBD5E0" : "",
                }}
              >
                <div>
                  <span>Selecione a atividade</span>
                  <Controller
                    control={control}
                    name={`EPIS.${index}.activity`}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        disabled={notUsesEPI}
                        error={errors.EPIS?.[index]?.activity?.message}
                        onChange={onChange}
                        value={value}
                        options={activities}
                      />
                    )}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    marginTop: "0.75rem",
                  }}
                >
                  <div style={{ width: "100%", maxWidth: "266px" }}>
                    <span>Selecione o EPI:</span>
                    <Controller
                      control={control}
                      name={`EPIS.${index}.EPI`}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          disabled={notUsesEPI}
                          error={errors.EPIS?.[index]?.EPI?.message}
                          onChange={onChange}
                          value={value}
                          options={epis}
                        />
                      )}
                    />
                  </div>

                  <div style={{ width: "100%", maxWidth: "266px" }}>
                    <span style={{ marginBottom: "0.5rem" }}>
                      Informe o número do CA:
                    </span>
                    <Input
                      type="number"
                      disabled={notUsesEPI}
                      placeholder="9352"
                      {...register(`EPIS.${index}.numberCA`)}
                      error={errors.EPIS?.[index]?.numberCA?.message}
                    />
                  </div>

                  <Button
                    style={{
                      marginTop: "10px",
                      flex: "1",
                      border: "none",
                      backgroundColor: "transparent",
                      cursor: "not-allowed",
                    }}
                    type="button"
                    disabled
                  >
                    Adicionar EPI
                  </Button>
                </div>
              </div>
            ))}

            <Button
              style={{
                backgroundColor: notUsesEPI ? "#CBD5E0" : "",
                cursor: notUsesEPI ? "not-allowed" : "",
                marginTop: "1.5rem",
              }}
              onClick={() => append({ activity: "", EPI: "", numberCA: "" })}
              type="button"
              disabled={notUsesEPI}
            >
              Adicionar outra atividade
            </Button>
          </div>

          <div
            style={{
              marginTop: "1.5rem",
              width: "100%",
              border: "1px solid #3182CE",
              minHeight: "138px",
              borderRadius: "10px",
              padding: "0.75rem 0.5rem",
            }}
          >
            <span style={{ fontWeight: "500", color: "#718096" }}>
              Adicione Atestado de Saúde Ocupacional (opcional):
            </span>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginTop: "0.75rem",
              }}
            >
              <input
                placeholder={selectedPhotoName}
                disabled
                style={{
                  height: "36px",
                  backgroundColor: "transparent",
                  cursor: "default",
                }}
              />

              <label
                style={{
                  border: "1px solid #3182CE",
                  width: "100%",
                  height: "36px",
                  position: "relative",
                  borderRadius: "10px",
                  transition: "background-color 0.3s",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  Selecionar Arquivo
                </span>
                <input
                  style={{ display: "none" }}
                  type="file"
                  accept="image/*"
                  {...register("medicalCertificateFile")}
                />
              </label>
            </div>
          </div>

          <Button type="submit" style={{ marginTop: "20px" }}>
            Salvar
          </Button>
        </form>
      </div>
    </ContainerForm>
  );
};

export default Form;
